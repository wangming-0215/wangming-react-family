import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import Tabs from './components/Tabs';
import TabPane from './components/Tabs/TabPane';

let root = document.getElementById('app');
if (!root) {
    root = document.createElement('div');
    root.id = 'app';
    document.body.appendChild(root);
}

const app = (
    <AppContainer errorReporter={Redbox}>
        <Tabs defaultActiveIndex={0} className="tabs-bar">
            <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
            <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
            <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
        </Tabs>
    </AppContainer>
);

ReactDOM.render(
    app,
    root
);

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./components/Tabs', () => {
        ReactDOM.render(
            app,
            root
        )
    })
}