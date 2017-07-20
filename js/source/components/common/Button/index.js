import React, { Component } from 'react';
import CSS from 'react-css-modules';
import style from './index.scss';
import classNames from 'classnames';

@CSS(style, { allowMultiple: true })
export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cssClass = classNames('Button', this.props.styleName);
        return this.props.href
            ? <a {...this.props} styleName={cssClass} />
            : <button {...this.props} styleName={cssClass} />
    }

}