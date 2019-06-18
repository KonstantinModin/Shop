import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/';

export default class Modal extends Component {
    componentDidUpdate(){
        console.log('Modal Did Update');
    }

    shouldComponentUpdate = (nextProps) => {
        // console.log('this.props.children :', this.props.children);
        return this.props.show !== nextProps.show || (this.props.show && this.props.children !== nextProps.children)
    };

    render(){
        const {show, children, modalClosed} = this.props;            
            return (
                <>
                    <Backdrop show={show} clicked={modalClosed} />
                    <div className="Modal"
                        style={{
                            transform: show? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: show? '1' : '0'
                        }}>
                        {children}            
                    </div>
                </>
            )

    }
    
}


