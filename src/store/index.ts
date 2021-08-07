import { createStore, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppState } from '../utils/types';
import reducers from '../reducers';
import { IAction } from '../utils/interfaces';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, componseEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, IAction>)));