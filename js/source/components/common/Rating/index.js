import React, { Component } from 'react';
import classNames from 'classnames';
import CSS from 'react-css-modules';
import style from './index.scss';

@CSS(style, { allowMultiple: true })
export default class extends Component {

    static defaultProps = {
        defaultValue: 0,
        max: 5  // 星星数量
    };

    constructor(props) {
        super(props);
        this.state = {
            rating: props.defaultValue,  // 当前评分
            tmpRating: props.defaultValue  // 鼠标在星星上移动但尚未点击提交时候显示的评分。
        };
    }

    // 所有的输入组件都提供这个函数
    getValue() {
        return this.state.rating;
    }
    // 鼠标放在组件上是调用该方法
    setTemp = (rating) => {
        this.setState({
            tmpRating: rating
        });
    }

    // 鼠标点击组件是调用该方法
    setRating = (rating) => {
        this.setState({
            tmpRating: rating,
            rating: rating
        });
    }

    // 鼠标移开时，调用该方法
    reset = () => {
        this.setTemp(this.state.rating);
    }

    componentWillReceiveProps(nextProps) {
        this.setRating(nextProps.defaultValue)
    }

    render() {
        const stars = [];
        for (let i = 1; i <= this.props.max; i++) {
            stars.push(
                <span
                    styleName={i < this.state.tmpRating ? 'RatingOn' : null}
                    key={i}
                    onClick={!this.props.readonly && this.setRating}
                    onMouseOver={!this.props.readonly && this.setTemp}
                >
                    &#9734;
                </span>
            );
        }
        return (
            <div styleName={classNames({ 'Rating': true, 'RatingReadonly': this.props.readonly })}
                onMouseOut={this.reset}>
                {stars}
                {this.props.readonly || !this.props.id
                    ? null
                    : <input type='hidden'
                        id={this.props.id}
                        value={this.state.rating} />}
            </div>
        );
    }

}