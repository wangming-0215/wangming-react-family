import React, { Component } from 'react';
import CSS from 'react-css-modules';
import style from './index.scss';

@CSS(style)
export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName='Actions'>
                <span tabIndex='0' styleName='ActionsInfo' title='more info' onClick={() => this.props.onAction('info')}>
                    Info
                </span>
                <span tabIndex='0' styleName='ActionsEdit' title='edit' onClick={() => this.props.onAction('eidt')}>
                    Edit
                </span>
                <span tabIndex='0' styleName='ActionsDelete' title='delete' onClick={() => this.props.onAction('delete')}>
                    Delete
                </span>
            </div>
        );
    }
}

// const Actions = props => (
//     <div styleName='Actions'>
//         <span tabIndex='0' styleName='ActionsInfo' title='more info' onClick={() => props.onAction('info')}>
//             Info
//         </span>
//         <span tabIndex='0' styleName='ActionsEdit' title='edit' onClick={() => props.onAction('edit')}>
//             Edit
//         </span>
//         <span tabIndex='0' styleName='ActionsDelete' title='delete' onClick={() => props.onAction('delete')}>
//             Delete
//         </span>
//     </div>
// );

// export default CSS(Actions, style);