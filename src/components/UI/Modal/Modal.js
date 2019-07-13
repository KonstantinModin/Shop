import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/';

export default class Modal extends Component {   

    shouldComponentUpdate = ({show, children}) => {       
        return this.props.show !== show || (this.props.children !== children);
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


