import React, { Component } from 'react';
import Button from '../../../components/UI/Button';
import './ContactData.css';


class ContactData extends Component {  
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className="ContactData">
                <h2>Enter your Contact Data</h2>
                <form>
                    <input type="text" name="name" placeholder="Enter your name" />
                    <input type="email" name="email" placeholder="Enter your email" />
                    <input type="text" name="street" placeholder="Enter your Street" />
                    <input type="text" name="postal" placeholder="Enter your Postal Code" />
                    <Button btnType="Success">Order</Button>
                </form>
                
            </div>
        )
    }
}

export default ContactData;
