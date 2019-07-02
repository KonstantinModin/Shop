import React, { Component } from 'react';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';
import server from '../../../axios-orders';
import Input from '../../../components/UI/Input';
import { connect } from 'react-redux';
import { CLEAR_ODER } from '../../../store/actions';
import './ContactData.css';

class ContactData extends Component {  
    state = {
        orderForm: {   
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
                    minLength: 6,
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
                valid: false,
                shouldValidate: true,
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
            },
        },        
        loading: false,
        formIsValid: false
    }

    orderHandler = (e) => {
        e.preventDefault();        
        this.setState({loading: true});
        
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            date: new Date(),
            customerData: Object.entries(this.state.orderForm).map(([a, b])=> `${a}: ${b.value}`),
            deliveryMethod: 'pigeons'
        };
        server.post('/orders.json', order)
            .then(res => this.setState({loading: false }))
            .catch(err => this.setState({loading: false }))
            .then(() => {
                alert('Your order will be ready soon!');
                this.props.clearOder(); 
                this.props.history.push('/');
            });   
        
    }

    checkValidity({validation, value, shouldValidate}) {
        if (!shouldValidate) return true;
        let isValid = true;
        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }
        if (validation.maxLength) {
            isValid = value.length <= validation.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = ({target: {value}}, name) => {
        // console.log('event.target :', name);
        const updatedOrderForm = { ...this.state.orderForm};
        const updatedFormElement = { ...updatedOrderForm[name]};
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement);
        updatedOrderForm[name] = updatedFormElement;       

        
        this.setState({orderForm: updatedOrderForm});
        console.log('this.state from handler', this.state);

        
    }
    componentDidUpdate(_, prevState){
        const formIsValid = Object.entries(this.state.orderForm).every(i => i[1].valid);        
        if (formIsValid !== prevState.formIsValid) {
            this.setState({formIsValid: formIsValid});
        }
    }

    render() {
        let form = (
            <>
                <h2>Enter your Contact Data</h2>
                <form>
                    {Object.entries(this.state.orderForm).map(([a, b]) => (
                        <Input
                            key={a}                                 
                            elementType={b.elementType}
                            elementConfig={b.elementConfig}
                            value={b.value}
                            label={b.label}
                            invalid={!b.valid}
                            shouldValidate={b.shouldValidate}
                            touched={b.touched}
                            changed={(event) => this.inputChangedHandler(event, a)} />                        
                    ))}                    
                    <div className="ButtonDiv">
                        <Button enabled={this.state.formIsValid} btnType="Success" clicked={this.orderHandler}>Order</Button>
                    </div>
                </form>
            </>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        console.log('this.state.formIsValid :', this.state.formIsValid);
        return (
            <div className="ContactData">
                {form}                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearOder: () => dispatch({type: CLEAR_ODER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
