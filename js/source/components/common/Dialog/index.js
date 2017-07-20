import React, { Component } from 'react';
import Button from '../Button';
import CSS from 'react-css-modules';
import style from './index.scss';

@CSS(style, { allowMultiple: true })
export default class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.modal) {
            document.body.classList.add('DialogModalOpen');
        }
    }

    compoentWillUnmount() {
        document.body.classList.remove('DialogModalOpen');
    }

    render() {
        return (
            <div styleName={this.props.modal ? 'Dialog DialogModal' : 'Dialog'}>
                <div styleName={this.props.modal ? 'DialogModalWrap' : null}>
                    <div styleName='DialogHeader'>{this.props.header}</div>
                    <div styleName='DialogBody'>{this.props.children}</div>
                    <div styleName='DialogFooter'>
                        {this.props.hasCancel
                            ? <span styleName='DialogDismiss' onClick={() => this.props.onAction('dismiss')}>Cancle</span>
                            : null
                        }
                        <Button onClick={() => this.props.onAction(this.props.hasCancel ? 'confirm' : 'dismiss')}>
                            {this.props.confirmLabel}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

}
