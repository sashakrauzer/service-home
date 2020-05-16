import { combineReducers } from 'redux';
import options from './options';
import distance from './distance';
import connection from './connection';

export default combineReducers({
    options,
    distance,
    connection
});