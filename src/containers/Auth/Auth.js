import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';
import { auth, setAuthRedirectPath } from '../../store/actions';
import { withRouter } from 'react-router-dom';
import { checkValidity } from '../../store/utility';
import './Auth.css';

const Auth = props => {
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
    // const [formIsValid, setFormIsValid] = useState(false);
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
        if (props.isAuth) {
            props.history.push(props.authRedirectPath);
        };
    }); 

    const submitHandler = (event) => {
        event.preventDefault();
        // const {isSignup, controls: {email, password }} = state;
        props.onAuth(controls.email.value, controls.password.value, isSignup);
    };

    const switchAuthModeHandler = (event) => {
        event.preventDefault();
        setIsSignup(!isSignup);
    };

    useEffect(() => {
        if (!props.building) {
            props.onSetAuthRedirectPath(props.authRedirectPath);
        };
    // eslint-disable-next-line    
    }, []);    
    
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
    if (props.loading) {
        form = <Spinner />
    }
    let errorMessage = null;
    if (props.error) {
        errorMessage = <h2>{props.error.message.split`_`.join` `}</h2>
    }

    // let authRedirect = props.isAuth ? <Redirect to={props.authRedirectPath} /> : null;
    // console.log('props.isAuth', props.isAuth);
    // console.log('authRedirect', authRedirect);
    // console.log('props.authRedirectPath :', props.authRedirectPath);
    console.log('this in Auth non-Class:', this);
    return (
        <div className="Auth">
            {/* {authRedirect} */}
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

// checkValidity({validation, value, shouldValidate}) {        
    //     if (!shouldValidate) return true;
    //     let isValid = true;
    //     if (validation.required) {
    //         isValid = value.trim() !== '' && isValid;            
    //     }
        
    //     if (validation.minLength) {
    //         isValid = value.length >= validation.minLength && isValid;            
    //     }
    //     if (validation.maxLength) {
    //         isValid = value.length <= validation.maxLength && isValid;            
    //     }
        
    //     if (validation.isEmail) {
    //         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //         isValid = pattern.test(value) && isValid;           
    //     }
    //     return isValid;
    // }


    // componentDidUpdate(_, prevState){
        // const formIsValid = ;        
        // if (formIsValid !== prevState.formIsValid) {
        //     setState({formIsValid: formIsValid});
        // };