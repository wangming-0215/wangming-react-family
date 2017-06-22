import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <input type="input" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}