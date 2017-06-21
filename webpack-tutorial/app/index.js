import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';

function compoent() {
    var element = document.createElement('div');
    element.innerHTML = _.join([ 'hello', 'world' ], ' ');
    return element;
}

document.body.appendChild(compoent());

var moment = require('moment');
console.log(moment().format());

function determineDate() {
    import('../node_modules/moment').then(function (moment) {
        console.log(moment().format());
    }).catch(function (err) {
        console.log('Failed to load moment', err);
    })
}

determineDate();