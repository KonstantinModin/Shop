import { useState, useEffect } from 'react';

const useHTTP = httpClient => {
    const [errorState, setErrorState] = useState(null);
        
    const reqInterseptor = httpClient.interceptors.request.use(req => {
        setErrorState(null);
        return req;
    });
    const responseInterseptor = httpClient.interceptors.response.use(res => res, error => {               
        setErrorState(error);                
    });
    

    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterseptor);
            httpClient.interceptors.response.eject(responseInterseptor);  
            // console.log('will unmount interseptors!', reqInterseptor, responseInterseptor);
        }
    // eslint-disable-next-line 
    }, [reqInterseptor, responseInterseptor]);

    const errorConfirmedHandler = () => {
        setErrorState(null);
    };

    return [errorState, errorConfirmedHandler];
}

export default useHTTP;