import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import adminorstudentReducer from '../reducers/adminorstudentReducer';
import adminReducer from '../reducers/adminReducer'
import studentReducer from '../reducers/studentReducer';
const configureStore=()=>{
    const store=createStore(combineReducers({
        adminData:adminReducer,
        studentData:studentReducer,
        adminorstudent:adminorstudentReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore