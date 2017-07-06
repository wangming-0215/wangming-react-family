import React, { Component, PropTypes } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSMoudules from 'react-css-modules';
import classnames from 'classnames';
import styles from './index.scss';

@immutableRenderDecorator
@CSSMoudules(styles, { allowMultiple: true })
export default class extends Component {
    static propTypes = {
        tab: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
        ]).isRequired,
        order: PropTypes.string.isRequired,
        disable: PropTypes.bool,
        isActive: PropTypes.bool,
    }

    render() {
        const { className, isActive, children } = this.props;
        const classes = classnames({
            panel: true,
            contentActive: isActive,
        });

        return (
            <div role="tabpanel" styleName={classes} aria-hidden={!isActive}>
                {children}
            </div>
        );
    }

}