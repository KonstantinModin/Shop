import React, { Component } from 'react';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';
import server from '../../../axios-orders';
import './ContactData.css';


class ContactData extends Component {  
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
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

    render() {
        let form = (
            <>
            <h2>Enter your Contact Data</h2>
                <form>
                    <input type="text" name="name" placeholder="Enter your name" />
                    <input type="email" name="email" placeholder="Enter your email" />
                    <input type="text" name="street" placeholder="Enter your Street" />
                    <input type="text" name="postal" placeholder="Enter your Postal Code" />
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
