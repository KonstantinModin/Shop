import React, {Component} from 'react';
import './OrderSummary.css';
import Button from '../../UI/Button/';
// import { Link } from 'react-router-dom';

export default class OrderSummary extends Component {
    // componentDidUpdate(){
    //     console.log('[Order summary did update]');
    // }

    render() {
    const {order, totalP, cancel, makeAdeal} = this.props;

    const summary = Object.keys(order).filter(i => order[i] > 0).map(i => (
        <li key={i}>
            <span style={{textTransform: 'capitalize'}}>{i}</span>: {order[i]}
        </li>));

        return (            
            <div className="OrderSummary">
                <h2>Your Order Total Price is </h2><h1>{totalP.toFixed(2)} $</h1>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {summary}
                </ul>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={cancel}>CANCEL</Button>
                {/* <Link to="/checkout" exact> */}
                <Button btnType="Success" clicked={makeAdeal}>CONTINUE</Button>
                {/* </Link>     */}
            </div>
        )
    }
}