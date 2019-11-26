import React, { useEffect } from 'react';
import Order from '../../components/Order';
import server from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import { fetchOrders } from '../../store/actions';
import { connect } from 'react-redux';
import './Orders.css';

const Orders = ({ onFetchOrders, token, userId, orders, loading }) => {
    
    useEffect(() => {        
        onFetchOrders(token, userId);        
        }, [ onFetchOrders, token, userId ]);    

    let content = <Spinner />;
    
    if (!loading) {
        
        content = (
        <>
            <h1>Your Orders</h1>
            {orders.map((item) => 
                <Order 
                    key={item[0]} 
                    date={item[1].date} 
                    price={item[1].price.toFixed(2)}
                    ingredients={item[1].ingredients}/>
            )}
        </>
        )
    }
    
    return (
        <div className="Orders">
            {content}
        </div>
    )    
};

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, id) => dispatch(fetchOrders(token, id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, server));