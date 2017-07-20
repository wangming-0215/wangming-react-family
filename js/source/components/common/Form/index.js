import React, { Component } from 'react';
import FormInput from '../FormInput';
import Rating from '../Rating';
import CSS from 'react-css-modules';
import style from './index.scss';

@CSS(style)
export default class extends Component {
    constructor(props) {
        super(props);
    }

    getData() {
        let data = {};
        this.props.fields.forEach(field => data[field.id] = this.refs[field.id].getValue());
        return data;
    }

    render() {
        return (
            <form styleName='Form'>
                {this.props.fields.map(field => {
                    const prefilled = this.props.initialData && this.props.initialData[field.id];
                    if (!this.props.readonly) {
                        return (
                            <div styleName='FormRow' key={field.id}>
                                <label styleName='FormLabel' htmlFor={field.id}>{field.label}:</label>
                                <FormInput {...field} ref={field.id} defaultValue={prefilled} />
                            </div>
                        );
                    }
                    if (!prefilled) {
                        return null;
                    }
                    return (
                        <div styleName='FormRow' key={field.id}>
                            <span styleName='FormLabel'>{field.id}:</span>
                            {field.type === 'rating'
                                ? <Rating readonly={true} defaultValue={parseInt(prefilled, 10)} />
                                : <div>{prefilled}</div>
                            }
                        </div>
                    );
                }, this)}
            </form>
        );
    }

}