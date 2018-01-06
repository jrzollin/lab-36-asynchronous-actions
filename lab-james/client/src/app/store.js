import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import reducer from './reducer.js';
import reporter from './middleware/reporter.js';

export default () => createStore(reducer, applyMiddleware(reporter));
