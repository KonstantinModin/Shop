import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';
import { auth, setAuthRedirectPath } from '../../store/actions';
import { Redirect } from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
    state = {
        controls: {
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
        },
        formIsValid: false,
        isSignup: true
    }

    checkValidity({validation, value, shouldValidate}) {        
        if (!shouldValidate) return true;
        let isValid = true;
        if (validation.required) {
            isValid = value.trim() !== '' && isValid;            
        }
        
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;            
        }
        if (validation.maxLength) {
            isValid = value.length <= validation.maxLength && isValid;            
        }
        
        if (validation.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;           
        }
        return isValid;
    }

    inputChangedHandler = (event, controlName) => {       
        const updatedControls = {...this.state.controls};
        const updatedItem = {...updatedControls[controlName]};
        updatedItem.value = event.target.value;
        updatedItem.valid = this.checkValidity(updatedItem);
        updatedItem.touched = true;        
        updatedControls[controlName] = updatedItem;
        this.setState({controls: updatedControls});
    }

    componentDidUpdate(_, prevState){
        const formIsValid = Object.entries(this.state.controls).every(i => i[1].valid);        
        if (formIsValid !== prevState.formIsValid) {
            this.setState({formIsValid: formIsValid});
        };        
    };

    submitHandler = (event) => {
        const {isSignup, controls: {email, password }} = this.state;
        event.preventDefault();
        this.props.onAuth(email.value, password.value, isSignup);
    }

    switchAuthModeHandler = (event) => {
        event.preventDefault();
        this.setState(state => {
            return {isSignup: !state.isSignup}
        })
    };

    componentDidMount() {
        if (!this.props.building && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }
    
    render() {
        let form = (
            <form onSubmit={this.submitHandler}>
                    {Object.entries(this.state.controls).map(([a, b]) => (
                            <Input
                                key={a}                                 
                                elementType={b.elementType}
                                elementConfig={b.elementConfig}
                                value={b.value}
                                label={b.label}
                                invalid={!b.valid}
                                shouldValidate={b.shouldValidate}
                                touched={b.touched}
                                changed={(event) => this.inputChangedHandler(event, a)} />                        
                        ))}                    
                        <div className="ButtonDiv">
                            <Button enabled={this.state.formIsValid} btnType="Success" clicked={this.orderHandler}>Submit</Button>
                            <Button 
                                btnType="Danger" 
                                clicked={this.switchAuthModeHandler}
                                >SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
                        </div>
                </form>
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <h2>{this.props.error.message.split`_`.join` `}</h2>
        }

        let authRedirect = this.props.isAuth ? <Redirect to={this.props.authRedirectPath} /> : null;
        console.log('this.props.isAuth', this.props.isAuth);
        console.log('authRedirect', authRedirect);
        return (
            <div className="Auth">
                {authRedirect}
                <h2>{this.state.isSignup.toString()}</h2>
                {errorMessage}
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        building: state.builder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);