import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.defaultValue };
    }

    getValue() {
        return this.state.value;
    }

    render() {
        const randomId = Math.random().toString(16).substring(2);
        return (
            <div>
                <input
                    list={randomId}
                    defaultValue={this.props.defaultValue}
                    onChange={e => this.setState({ value: e.target.value })}
                    id={this.props.id}
                />
                <datalist id={randomId}>
                    {
                        this.props.options.map((item, index) => {
                            return <option value={item} key={index} />
                        })
                    }
                </datalist>
            </div>
        );
    }
}