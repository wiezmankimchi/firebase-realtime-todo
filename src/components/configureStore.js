import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import { applyRouterMiddleware } from 'react-router/lib';

export default () => {
    let middlewares = [thunk]
    let store = createStore(reducers, applyRouterMiddleware(...middlewares))
    return store
}