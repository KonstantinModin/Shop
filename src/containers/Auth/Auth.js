import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';
import { auth, setAuthRedirectPath } from '../../store/actions';
import { withRouter } from 'react-router-dom';
import { checkValidity } from '../../store/utility';
import './Auth.css';

const Auth = ({ isAuth, authRedirectPath, history, onAuth, building, 
    onSetAuthRedirectPath, loading, error }) => {
    const [controls, setControls] = useState({
        email: {
            elementType: 'input',
            label: 'Your e-mail:',
            elementConfig: {
                type: 'email',
                placeholder: 'Enter Your e-mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            shouldValidate: true,
            touched: false
        },
        password: {
            elementType: 'input',
            label: 'Your password:',
            elementConfig: {
                type: 'password',
                placeholder: 'Enter Your password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            shouldValidate: true,
            touched: false
        }
    });    
    const [isSignup, setIsSignup ] = useState(true);    

    const inputChangedHandler = (event, controlName) => {       
        const updatedControls = {...controls};
        const updatedItem = {...updatedControls[controlName]};
        updatedItem.value = event.target.value;
        updatedItem.valid = checkValidity(updatedItem);
        updatedItem.touched = true;        
        updatedControls[controlName] = updatedItem;
        setControls(updatedControls);
    };
    
    useEffect(() => {
        if (isAuth) history.push(authRedirectPath);        
    }); 

    const submitHandler = (event) => {
        event.preventDefault();        
        onAuth(controls.email.value, controls.password.value, isSignup);
    };

    const switchAuthModeHandler = (event) => {
        event.preventDefault();
        setIsSignup(!isSignup);
    };

    useEffect(() => {
        if (!building) {
            onSetAuthRedirectPath(authRedirectPath);
        };     
    }, [building, onSetAuthRedirectPath, authRedirectPath]);    
    
    let form = (
        <form onSubmit={submitHandler}>
                {Object.entries(controls).map(([a, b]) => (
                        <Input
                            key={a}                                 
                            elementType={b.elementType}
                            elementConfig={b.elementConfig}
                            value={b.value}
                            label={b.label}
                            invalid={!b.valid}
                            shouldValidate={b.shouldValidate}
                            touched={b.touched}
                            changed={(event) => inputChangedHandler(event, a)} />                        
                    ))}                    
                    <div className="ButtonDiv">
                        <Button 
                            enabled={Object.entries(controls).every(i => i[1].valid)} 
                            btnType="Success">Submit</Button>
                        <Button 
                            btnType="Danger" 
                            clicked={switchAuthModeHandler}
                            >SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
                    </div>
            </form>
    )
    if (loading) {
        form = <Spinner />
    }
    let errorMessage = null;
    if (error) {
        errorMessage = <h2>{error.message.split`_`.join` `}</h2>
    }
    
    return (
        <div className="Auth">            
            <h2>{isSignup.toString()}</h2>
            {errorMessage}
            {form}
        </div>
    )
    
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        building: state.builder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(setAuthRedirectPath('/'))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));