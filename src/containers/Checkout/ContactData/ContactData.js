import React, { Component } from 'react';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';
import server from '../../../axios-orders';
import Input from '../../../components/UI/Input';
import './ContactData.css';


class ContactData extends Component {  
    state = {
        orderForm: {   
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Street'
                },
                value: ''
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter Your Postal Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Your E-Mail'
                },
                value: ''
            },       
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: ['Pigeons', 'Horses', 'Rats', 'Mice']
                },
                value: ''
            },
        },        
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.setState({loading: true});
        const order = {
            ingredients: this.props.location.state[0],
            price: this.props.location.state[1],
            date: new Date(),
            customer: {
                name: 'Jhon',
                email: 'test@anytest.de'
            },
            deliveryMethod: 'pigeons'
        };
        server.post('/orders.json', order)
            .then(res => this.setState({loading: false }))
            .catch(err => this.setState({loading: false }))
            .then(() => {
                alert('Your order will be ready soon!');
                this.props.history.push('/');
            });   
        
    }

    inputChangedHandler = (event) => {
        console.log('event.target.value :', event.target.value);
    }

    render() {
        console.log('this.state.orderForm :', this.state.orderForm);
        const formElementsArr = Object.entries(this.state.orderForm);
        console.log('formElementsArr :', formElementsArr);

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
                            changed={this.inputChangedHandler} />
                    ))}
                    
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                {form}                
            </div>
        )
    }
}

export default ContactData;
