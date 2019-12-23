import React, { useState, useEffect } from 'react';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';
import server from '../../../axios-orders';
import Input from '../../../components/UI/Input';
import { connect } from 'react-redux';
import { purchaseBurger } from '../../../store/actions';
import withErrorHandler from '../../../hoc/withErrorHandler';
import { checkValidity } from '../../../store/utility';
import './ContactData.css';

const ContactData = props => {  
    const [orderForm, setOrderForm ] = useState({   
        name: {
            elementType: 'input',
            label: 'Your name:',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            shouldValidate: true,
            touched: false
        },
        street: {
            elementType: 'input',
            label: 'Your street:',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Your Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            shouldValidate: true,
            touched: false
        },
        postalCode: {
            elementType: 'input',
            label: 'Your postal code:',
            elementConfig: {
                type: 'number',
                placeholder: 'Enter Your Postal Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 6
            },
            valid: false,
            shouldValidate: true,
            touched: false
        },
        country: {
            elementType: 'input',
            label: 'Your country:',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Your Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: true,
            shouldValidate: false,
            touched: false
        },
        email: {
            elementType: 'input',
            label: 'Your e-mail:',
            elementConfig: {
                type: 'email',
                placeholder: 'Enter Your E-Mail'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            shouldValidate: true,
            touched: false
        },       
        deliveryMethod: {
            elementType: 'select',
            label: 'Delivery method:',
            elementConfig: {
                options: ['Pigeons', 'Horses', 'Rats', 'Mice', 'Ants']
            },
            value: 'Pigeons',
            shouldValidate: false,
            touched: false,
            valid: true
        }
    });
        
    // const [formIsValid, setFormIsValid ] = useState(false);
    

    const orderHandler = (e) => {
        e.preventDefault();

        const {userId, ingredients, price, onOrderBurger, token} = props;
        
        const order = {
            userId: userId,
            ingredients: ingredients,
            price: price,
            date: new Date(),
            customerData: Object.entries(orderForm).map(([a, b])=> `${a}: ${b.value}`)
            // deliveryMethod: 'pigeons'
        };
        onOrderBurger(order, token);        
    };    

    const inputChangedHandler = ({target: {value}}, name) => {   
        const updatedOrderForm = { ...orderForm};
        const updatedFormElement = { ...updatedOrderForm[name]};
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = checkValidity(updatedFormElement);
        updatedOrderForm[name] = updatedFormElement;
        
        setOrderForm(updatedOrderForm);              
    };
    
    useEffect(() => {
        // const isValid = Object.entries(orderForm).every(i => i[1].valid);       
        // setFormIsValid(isValid);
        if (props.purchased) props.history.replace('/');
    // eslint-disable-next-line        
    }, [props.purchased]);   
        
    
    let form = (
        <>
            <h2>Enter your Contact Data</h2>
            <form>
                {Object.entries(orderForm).map(([a, b]) => (
                    <Input
                        key={a}                                 
                        elementType={b.elementType}
                        elementConfig={b.elementConfig}
                        value={b.value}
                        label={b.label}
                        invalid={!b.valid}
                        shouldValidate={b.shouldValidate}
                        touched={b.touched}
                        changed={(event) => inputChangedHandler(event, a)} />                        
                ))}                    
                <div className="ButtonDiv">
                    <Button 
                        enabled={Object.entries(orderForm).every(i => i[1].valid)} 
                        btnType="Success" 
                        clicked={orderHandler}
                    >Order</Button>
                </div>
            </form>
        </>
    );
    if (props.loading) {
        form = <Spinner />
    }
    return (
        <div className="ContactData">
            {form}                
        </div>
    )
    
};
const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        price: state.builder.totalPrice,
        loading: state.order.loading,
        purchased: state.order.purchased,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (data, token) => dispatch(purchaseBurger(data, token))        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, server));
