import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/';

const Modal = ({show, children, modalClosed}) => {   

    // shouldComponentUpdate = ({show, children}) => {       
    //     return this.props.show !== show || (this.props.children !== children);
    // };    
              
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
export default Modal;