import React, { Component, PropTypes } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import TabNav from './TabNav';
import TabContent from './TabContent'
import { Seq } from 'immutable';
import classnames from 'classnames';

@immutableRenderDecorator
@CSSModules()
export default class extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        defaultActiveIndex: PropTypes.number,
        activeIndex: PropTypes.number,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        onChange: () => { }
    };

    constructor(props) {
        super(props);

        const currProps = this.props;
        this.immChildren = Seq(currProps.children);

        let activeIndex;
        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            preIndex: activeIndex
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }

    handleTabClick = (activeIndex) => {
        const preIndex = this.state.activeIndex;

        if (this.state.activeIndex !== activeIndex &&
            'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                preIndex,
            });
            this.props.onChange({
                activeIndex,
                preIndex,
            });
        }
    }

    renderTabNav() {
        return (
            <TabNav
                key='tabBar'
                onTabClick={this.handleTabClick}
                panels={this.immChildren}
                activeIndex={this.state.activeIndex}
            />
        );
    }

    renderTabContent() {
        return (
            <TabContent
                key='tabcontent'
                activeIndex={this.state.activeIndex}
                panels={this.immChildren}
            />
        );
    }

    render() {

        const { className } = this.props
        const classes = classnames(className, 'ui-tabs');

        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );

    }

}