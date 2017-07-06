import React, { Component, PropTypes } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import styles from './index.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
export default class extends Component {
    static propTypes = {
        panels: PropTypes.object,
        activeIndex: PropTypes.number,
    };

    getTabPanes() {
        const { activeIndex, panels } = this.props;
        return panels.map((child) => {
            if (!child) return;
            const order = parseInt(child.props.order, 10);
            const isActive = activeIndex === order;
            return React.cloneElement(child, {
                isActive,
                children: child.props.children,
                key: `tabpane-${ order }`,
            });
        });
    }

    render() {
        const classes = classnames({
            content: true,
        });
        return (
            <div styleName={classes}>
                {this.getTabPanes()}
            </div>
        );
    }
}