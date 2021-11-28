import React from "react";
import ReactDOM  from "react-dom";
import App from "./components/common/App";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import configureStore from './store/configureStore'
import jwt_decode from "jwt-decode";
import { setAdminorStudent, stataStudentsList, stateAdminAccount,stateAdminAllCourses,stateStudentAccount} from './actions/actionCreater';

const store=configureStore()
console.log("initialstate",store.getState())
store.subscribe(()=>{
    console.log("updatedstate",store.getState())
})
const runCallback=()=>{
    if(localStorage.getItem('token'))
{
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    if(decoded.role==='admin')
    {
        store.dispatch(setAdminorStudent(decoded))
        store.dispatch(stateAdminAccount()) 
        store.dispatch(stataStudentsList())  
       store.dispatch(stateAdminAllCourses())
    }
    else
    {
        store.dispatch(stateStudentAccount())
        store.dispatch(stateAdminAllCourses())
        store.dispatch(setAdminorStudent(decoded))
    }
}
}
runCallback()
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,document.getElementById('root'))