import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const configureStore=createStore(combineReducers({

}),applyMiddleware(thunk))
export default configureStore