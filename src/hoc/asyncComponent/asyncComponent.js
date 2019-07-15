import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {

        };

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    console.log('cmp', cmp);
                    this.setState({component: cmp.default})
                });
        };

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null
        };
    };
};

export default asyncComponent;