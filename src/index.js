import React from "react";
import ReactDOM  from "react-dom";
import App from "./components/common/App";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import configureStore from './store/configureStore'
import { setAdminToggle, stateAdminAccount } from './actions/actionCreater';

const store=configureStore()
console.log("initialstate",store.getState())
store.subscribe(()=>{
    console.log("updatedstate",store.getState())
})
const runCallback=()=>{
    if(localStorage.getItem('token'))
{
    store.dispatch(stateAdminAccount())
    store.dispatch(setAdminToggle(true))
}
}
runCallback()

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,document.getElementById('root'))