import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { auth } from '../../store/actions';
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
                    minLength: 5
                },
                valid: false,
                shouldValidate: true,
                touched: false
            }
        },
        formIsValid: false
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
    
    render() {
        console.log('this.state.formIsValid :', this.state.formIsValid);
        return (
            <div className="Auth">
                <form>
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
                        </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(auth(email, password))
    }
}


export default connect(null, mapDispatchToProps)(Auth);