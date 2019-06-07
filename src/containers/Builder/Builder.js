import React, { Component } from 'react';
import Burger from '../../components/Burger';

export default class Builder extends Component {
    render() {
        return (
            <>
                <Burger />
                <div>Controls</div>
            </>
        )
    }
}