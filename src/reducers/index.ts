import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import tempDataReducer from './tempDataReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    weather: weatherReducer,
    temparture: tempDataReducer,
    page: pageReducer
});