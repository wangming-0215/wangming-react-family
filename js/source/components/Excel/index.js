import React, { Component } from 'react';
import CSS from 'react-css-modules';
import style from './index.scss';
import FormInput from '../common/FormInput';
import Actions from '../common/Actions';
import Rating from '../common/Rating';
import classNames from 'classnames';

@CSS(style, { allowMultiple: true })
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.initialData,
            sortby: null, // schema.id
            descending: false,
            edit: null,
            dialog: null
        };
    }

    _fireDataChange() {
        // TODO: 通知父组件更新持久化存储中的内容
        return null;
    }

    _sort(key) {
        let data = Array.from(this.state.data);
        const descending = this.state.sortby === key && !this.state.descending;
        data.sort((a, b) => descending ? (a[key] < b[key] ? 1 : -1) : (a[key] > b[key] ? 1 : -1))
        this.setState({
            data: data,
            sortby: key,
            descending: descending
        });
        this._fireDataChange(data);
    }

    _showEditor = (e) => {
        // TODO 编辑
        console.log(e.target);
        this.setState({
            edit: { row: parseInt(e.target.dataset.row, 10), key: e.target.dataset.key }
        });
        return null;
    }

    _save = (e) => {
        e.preventDefault();
        const value = this.refs.input.getValue();
        let data = Array.from(this.state.data);
        data[this.state.edit.row][this.state.edit.key] = value;
        this.setState({
            edit: null,
            data: data
        });
    }

    _actionClick(rowIndex, action) {
        this.setState({
            dialog: { type: action, index: rowIndex }
        })
    }

    _renderTableHead() {
        return this.props.schema.map(item => {
            if (!item.show) {
                return null;
            }
            let title = item.label;
            if (this.state.sortby === item.id) {
                title += this.state.descending ? '\u2191' : '\u2193';
            }
            return (
                <th styleName={`schema-${ item.id }`} key={item.id} onClick={() => this._sort(item.id)}>{title}</th>
            );
        });
    }

    _renderTableBody() {
        return this.state.data.map((row, rowIndex) => {
            return (
                <tr key={rowIndex}>
                    {Object.keys(row).map((cell, cellIndex) => {
                        const schema = this.props.schema[cellIndex];
                        if (!schema || !schema.show) {
                            return null;
                        }
                        const isRating = schema.type === 'rating';
                        const edit = this.state.edit;
                        let content = row[cell];
                        if (!isRating && edit && edit.row === rowIndex && edit.key === schema.id) {
                            content = (
                                <form onSubmit={this._save}>
                                    <FormInput ref='input' {...schema} defaultValue={content} />
                                </form>
                            );
                        } else if (isRating) {
                            content = <Rating readonly defaultValue={Number(content)} />
                        }
                        return (
                            <td key={cellIndex}
                                styleName={classNames({
                                    [`schema-${ schema.id }`]: true,
                                    'ExcelEditable': !isRating,
                                    'ExcelDataLeft': schema.align === 'left',
                                    'ExcelDataRight': schema.align === 'right',
                                    'ExcelDataCenter': schema.align !== 'left' && schema.align !== 'right'
                                })}
                                data-row={rowIndex}
                                data-key={schema.id}>{content}</td>
                        );
                    })}
                    <td styleName='ExcelDataCenter'>
                        <Actions onAction={(action) => this._actionClick(rowIndex, action)} />
                    </td>
                </tr>
            );
        });
    }


    _renderTable() {
        return (
            <table>
                <thead>
                    <tr>
                        {this._renderTableHead()}
                        <th styleName='ExcelNotSortable'>Actions</th>
                    </tr>
                </thead>
                <tbody onDoubleClick={this._showEditor}>
                    {this._renderTableBody()}
                </tbody>
            </table>
        );
    }

    _renderDialog() {
        return null;
    }

    render() {
        return (
            <div styleName='Excel'>
                {this._renderTable()}
                {this._renderDialog()}
            </div>
        );
    }
}