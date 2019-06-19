import React, { Component } from 'react';
import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            };
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                console.log('error', error);
                this.setState({error: error});
                
            });
        }

        componentDidMount() {
        };

        render() {
            console.log('this.state.error', this.state.error);

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
