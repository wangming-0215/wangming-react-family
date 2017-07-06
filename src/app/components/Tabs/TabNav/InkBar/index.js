import React, { Component, PropTypes } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import styles from './index.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
export default class extends Component {
    static propTypes = {
        left: PropTypes.number,
        width: PropTypes.number,
    };

    render() {
        const { left, width } = this.props;

        const classes = classnames({
            inkBar: true,
        });

        return (
            <div styleName={classes}
                style={{
                    WebkitTransform: `translate3d(${ left }px, 0, 0)`,
                    transform: `translate3d(${ left }px, 0, 0)`,
                    width: width
                }}>
            </div >
        );

    }
}