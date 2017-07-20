import React, { Component } from 'react';
import Button from './Button';
import Suggest from './Suggest';
import Rating from './Rating';
import FormInput from './FormInput';
import Form from './Form';
import Actions from './Actions';
import Dialog from './Dialog';

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Button</h2>
                <div>Button with onClick: <Button onClick={() => { alert('ouch') }}>Click me</Button></div>
                <div>A link: <Button href='http://reactjs.com'>Follow me</Button></div>
                <div>Custom class name: <Button styleName='custom'>I do nothing</Button></div>

                <h2>Suggest</h2>
                <div>
                    <Suggest options={['eenie', 'meenie', 'miney', 'mo']} />
                </div>

                <h2>Rating</h2>
                <div>No initial value: <Rating /></div>
                <div>Initial value 4: <Rating defaultValue={4} /></div>
                <div>This one goes to 11: <Rating max={11} /></div>
                <div>Read-only: <Rating readonly={true} defaultValue={3} /></div>

                <h2>Form Input</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Vanilla input</td>
                            <td><FormInput /></td>
                        </tr>

                        <tr>
                            <td>Prefilled</td>
                            <td><FormInput defaultValue="it's like a default" /></td>
                        </tr>

                        <tr>
                            <td>Year</td>
                            <td><FormInput type="year" /></td>
                        </tr>

                        <tr>
                            <td>Rating</td>
                            <td><FormInput type='rating' defaultValue={4} /></td>
                        </tr>

                        <tr>
                            <td>Suggest</td>
                            <td><FormInput type='suggest' options={['red', 'green', 'blue']} defaultValue='green' /></td>
                        </tr>

                        <tr>
                            <td>Vanilla textarea</td>
                            <td><FormInput type='text' /></td>
                        </tr>
                    </tbody>
                </table>

                <h2>Form</h2>

                <Form
                    fields={[
                        { label: 'Rating', type: 'rating', id: 'rateme' },
                        { label: 'Greetings', id: 'freetext' },
                    ]}
                    initialData={{ rateme: 4, freetext: 'Hello' }} />

                <h2>Form readonly</h2>

                <Form
                    fields={[
                        { label: 'Rating', type: 'rating', id: 'rateme' },
                        { label: 'Greetings', id: 'freetext' },
                    ]}
                    initialData={{ rateme: 4, freetext: 'Hello' }}
                    readonly={true} />

                <h2>Actions</h2>
                <div><Actions onAction={type => alert(type)} /></div>

                <h2>Dialog</h2>
                <Dialog header='Out-of-the-box example' onAction={type => alert(type)}>
                    Hello dialog
                </Dialog>
                <Dialog header='No cancel, custom button' hasCancel={false} confirmLabel='whatever'
                    onAction={type => alert(type)}>
                    Anything goes here, see:
                    <Button>A button</Button>
                </Dialog>
            </div>
        );
    }
}