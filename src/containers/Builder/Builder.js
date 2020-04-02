import React, { useState, useEffect, useMemo, useCallback } from "react";
import Burger from "../../components/Burger";
import Controls from "../../components/Burger/Controls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/";
import server from "../../axios-orders";
import Spinner from "../../components/UI/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";
import { connect } from "react-redux";

import {
    handleIngredient,
    initIngredient,
    setAuthRedirectPath
} from "../../store/actions";
import { purchaseInit } from "../../store/actions";

export const Builder = ({
    ingredients,
    totalPrice,
    ingredientHandler,
    error,
    history,
    isAuth,
    initIngredient,
    purchaseInit,
    onSetAuthRedirectPath
}) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        initIngredient();
        purchaseInit();
    }, [initIngredient, purchaseInit]);

    const orderNowButtonHandler = useCallback(
        value => {
            if (isAuth) {
                setButtonClicked(value);
            } else {
                onSetAuthRedirectPath("/checkout");
                history.push("/auth");
            }
        },
        [isAuth, history, onSetAuthRedirectPath]
    );

    const purchaseContinueHandler = () => {
        history.push("/checkout");
    };

    const disabledInfo = { ...ingredients };
    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] === 0;

    let canWeOrder = false;
    let orderSummary = null;

    let burger = error ? <h1>Ingredients can't be loaded!</h1> : <Spinner />;

    if (ingredients) {
        canWeOrder = Object.values(ingredients).some(i => i > 0);
        burger = (
            <>
                <Burger ingredients={ingredients} />
                <Controls
                    ingredientHandler={ingredientHandler}
                    disabled={disabledInfo}
                    price={totalPrice}
                    canWeOrder={canWeOrder}
                    orderNowButton={orderNowButtonHandler}
                    isAuth={isAuth}
                />
            </>
        );
        orderSummary = (
            <OrderSummary
                order={ingredients}
                totalP={totalPrice}
                cancel={() => orderNowButtonHandler(false)}
                makeAdeal={purchaseContinueHandler}
            />
        );
    }

    return (
        <>
            {useMemo(
                () => (
                    <Modal
                        show={buttonClicked}
                        modalClosed={() => orderNowButtonHandler(false)}
                    >
                        {orderSummary}
                    </Modal>
                ),
                [buttonClicked, orderSummary, orderNowButtonHandler]
            )}
            {burger}
        </>
    );
};

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        totalPrice: state.builder.totalPrice,
        error: state.builder.error,
        isAuth: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ingredientHandler: (name, q) => dispatch(handleIngredient(name, q)),
        initIngredient: () => dispatch(initIngredient()),
        purchaseInit: () => dispatch(purchaseInit()),
        onSetAuthRedirectPath: path => dispatch(setAuthRedirectPath(path))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Builder, server));
