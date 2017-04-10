import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';
import promise from "redux-promise-middleware";


export default function configureStore(initialState) {
    const middleware = applyMiddleware(promise(),thunk,createLogger());
    return createStore(rootReducer, initialState, middleware);
}
