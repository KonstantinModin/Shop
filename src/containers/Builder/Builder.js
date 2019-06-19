import React, { Component } from 'react';
import Burger from '../../components/Burger';
import Controls from '../../components/Burger/Controls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/';
import server from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class Builder extends Component {
    state = {
        ingredients: null,
        totalPrice: 2,
        buttonClicked: false,
        loading: false
    }

    componentDidMount() {
        server.get('https://burger-shop-6267.firebaseio.com/ingredients.jon')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {});
    }

    ingredientHandler = (type, q) => {
        const  {ingredients, totalPrice} = this.state;
        
        const updatedIngredients = {...ingredients};
        updatedIngredients[type] = ingredients[type] + q;
        if (updatedIngredients[type] > - 1) {
            const newPrice = totalPrice + INGREDIENT_PRICES[type] * q;
            this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        } 
    }
    
    orderNowButtonHandler = (newValue) => this.setState({buttonClicked: newValue});

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            date: new Date(),
            customer: {
                name: 'Jhon',
                email: 'test@anytest.de'
            },
            deliveryMethod: 'pigeons'
        };
        server.post('/orders.json', order)
            .then(res => {
                this.setState({loading: false, buttonClicked: false});
            })
            .catch(err => {
                this.setState({loading: false, buttonClicked: false});
            });

        this.setState({
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 2            
        });
        // alert('Your order will be ready soon!');
    }
    
    render() {
        const { ingredients, buttonClicked, totalPrice } = this.state;

        const disabledInfo = { ...ingredients};
        for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] === 0;
        let canWeOrder = false;
        let orderSummary = null;       
        
        let burger = <Spinner />;

        if (this.state.ingredients) {
            canWeOrder = Object.values(ingredients).some(i => i > 0);
            burger = <>
                        <Burger ingredients={ingredients}/>
                        <Controls
                            ingredientHandler={this.ingredientHandler}                    
                            disabled={disabledInfo}
                            price={totalPrice}
                            canWeOrder={canWeOrder}
                            orderNowButton={this.orderNowButtonHandler} />
                    </>;
            orderSummary = <OrderSummary 
            order={ingredients} 
            totalP={totalPrice}
            cancel={() => this.orderNowButtonHandler(false)}
            makeAdeal={this.purchaseContinueHandler}/>;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <>
                <Modal show={buttonClicked} modalClosed={() => this.orderNowButtonHandler(false)}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        )
    }
}

export default withErrorHandler(Builder, server);



// addIngredientHandler = (type) => {
//     const updatedIngredients = {...this.state.ingredients};
//     updatedIngredients[type] = this.state.ingredients[type] + 1;
//     const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
//     this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
// }

// removeIngredientHandler = (type) => {
//     const updatedIngredients = {...this.state.ingredients};
//     updatedIngredients[type] = this.state.ingredients[type] - 1;
//     if (updatedIngredients[type] > -1) {
//         const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
//         this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
//     } 
// }