import React, { Component } from 'react';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import './Auth.css';

export default class Auth extends Component {
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
    
    render() {
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
