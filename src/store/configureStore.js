import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import adminReducer from '../reducers/adminReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        adminError:adminReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore