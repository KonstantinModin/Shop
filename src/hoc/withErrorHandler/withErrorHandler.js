import React, { useState, useEffect, useMemo } from 'react';
import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        const [errorState, setErrorState] = useState(null);
        
        const reqInterseptor = axios.interceptors.request.use(req => {
            setErrorState(null);
            return req;
        });
        const responseInterseptor = axios.interceptors.response.use(res => res, error => {               
            setErrorState(error);                
        });
        

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterseptor);
                axios.interceptors.response.eject(responseInterseptor);  
                // console.log('will unmount interseptors!', reqInterseptor, responseInterseptor);
            }
        }, [reqInterseptor, responseInterseptor]);

                   
        return (
            <>
                {useMemo(()=>(
                    <Modal 
                    show={errorState}
                    modalClosed={() => setErrorState(null)}>
                    <h1>We've got an error here:</h1>
                    <h2>{errorState ? errorState.message : null}</h2>
                    </Modal>
                ), [errorState])}                
                <WrappedComponent {...props}/>
            </>
        )
        
    }
}

export default withErrorHandler;
