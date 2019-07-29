import React, { useMemo } from 'react';
import Modal from '../../components/UI/Modal';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        // const [errorState, setErrorState] = useState(null);
        
        // const reqInterseptor = axios.interceptors.request.use(req => {
        //     setErrorState(null);
        //     return req;
        // });
        // const responseInterseptor = axios.interceptors.response.use(res => res, error => {               
        //     setErrorState(error);                
        // });
        

        // useEffect(() => {
        //     return () => {
        //         axios.interceptors.request.eject(reqInterseptor);
        //         axios.interceptors.response.eject(responseInterseptor);  
        //         // console.log('will unmount interseptors!', reqInterseptor, responseInterseptor);
        //     }
        // }, [reqInterseptor, responseInterseptor]);
        const [error, clearError] = useHttpErrorHandler(axios);

                   
        return (
            <>
                {useMemo(()=>(
                    <Modal 
                    show={error}
                    modalClosed={clearError}>
                    <h1>We've got an error here:</h1>
                    <h2>{error ? error.message : null}</h2>
                    </Modal>
                ), [error, clearError])}                
                <WrappedComponent {...props}/>
            </>
        )
        
    }
}

export default withErrorHandler;
