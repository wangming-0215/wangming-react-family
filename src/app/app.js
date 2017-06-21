import React from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('app');
if (!root) {
    root = document.createElement('div');
    root.id = 'app';
    document.body.appendChild(root);
}

ReactDOM.render(
    <div>wangming</div>,
    document.getElementById('app')
);

// 模块热替换的 API
if (!module.hot) {
    module.hot();
}