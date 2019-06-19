import React, { Component } from 'react';
import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            };
            this.reqInterseptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.responseInterseptor = axios.interceptors.response.use(res => res, error => {               
                this.setState({error: error});                
            });
        }

        componentWillUnmount() {
           console.log('will unmount interseptors!', this.reqInterseptor, this.responseInterseptor);
           axios.interceptors.request.eject(this.reqInterseptor);
           axios.interceptors.response.eject(this.responseInterseptor);           
        };

        render() {            
            return (
                <>
                    <Modal 
                        show={this.state.error}
                        modalClosed={() => this.setState({error: null})}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </>
            )
        }
    }
}

export default withErrorHandler;
