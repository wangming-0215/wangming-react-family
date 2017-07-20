import React, { Component } from 'react';
import Rating from '../Rating';
import Suggest from '../Suggest';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    getValue() {
        return 'value' in this.refs.input ? this.refs.input.value : this.refs.input.getValue();
    }

    render() {
        // 通用属性
        const common = {
            id: this.props.id,
            ref: 'input',
            defaultValue: this.props.defaultValue
        };

        switch (this.props.type) {
            case 'year':
                return (
                    <input {...common} type='number' defaultValue={this.props.defaultValue || new Date().getFullYear()} />
                );
            case 'suggest':
                return (
                    <Suggest {...common} options={this.props.options} />
                );
            case 'rating':
                return (
                    <Rating {...common} defaultValue={parseInt(this.props.defaultValue, 10)} />
                );
            case 'text':
                return <textarea {...common} />
            default:
                return <input {...common} type='text' />
        }
    }
}