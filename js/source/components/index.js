import React, { Component } from 'react';
import Excel from './Excel';
import schema from '../schema';
import CSS from 'react-css-modules';
import style from './index.scss';

@CSS(style)
export default class extends Component {
    constructor(props) {
        super(props)
    }

    _getData() {
        let data = JSON.parse(localStorage.getItem('data'));
        if (!data) {
            data = {};
            schema.forEach(item => data[item.id] = item.sample);
            data = [data];
        }
        return data;
    }

    render() {

        return (
            <div styleName='main-container'>
                <Excel schema={schema} initialData={this._getData()} />
            </div>
        );
    }
}