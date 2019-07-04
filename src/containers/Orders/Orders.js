import React, { useEffect, useState } from 'react';
import Order from '../../components/Order';
import server from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import './Orders.css';

const Orders = () => {
    const [state, setState] = useState({orders: null, loading: true});
    
    useEffect(() => {
        server.get('/orders.json')
            .then((response) => {
                // console.log('response.data in Orders :', response.data);
                setState({orders: Object.entries(response.data), loading: false});
                
            })
            .catch(error => {
                console.log('error in Orders :', error);
                setState((state) => {
                    return {...state, loading: false}
                });
            });

        }, []);    

    let content = state.loading ? <Spinner /> : null;
    if (state.orders !== null) content = (
        <>
            <h1>Your Orders</h1>
            {state.orders.map((item) => 
                <Order 
                    key={item[0]} 
                    date={item[1].date} 
                    price={item[1].price.toFixed(2)}
                    ingredients={item[1].ingredients}/>
            )}
        </>
    )
    
    return (
        <div className="Orders">
            {content}
        </div>
    )    
}

export default withErrorHandler(Orders, server);