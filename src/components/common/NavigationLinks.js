import React from "react";
import {Link,Route} from 'react-router-dom'
import Admin from "../admin/Admin";
import Home from "./Home"
import AdminRegister from "../admin/AdminRegister"
import AdminLogin from "../admin/AdminLogin"
import Student from "../student/Student";
import StudentLogin from "../student/StudentLogin";
const NavigationLinks=(props)=>{
    return(
        <div>
             <Link to='/'>Home</Link>|
             <Link to='/student'>Student</Link>|
             <Link to='/admin'>Admin</Link>|

             <Route path='/' component={Home} exact={true}></Route>
             <Route path='/admin' component={Admin} exact></Route>
             <Route path='/student' component={Student} exact ></Route>
             <Route path="/student/login" component={StudentLogin}></Route>
             <Route path='/admin/register' component={AdminRegister} exact={true}></Route>
            <Route path='/admin/login' component={AdminLogin} exact={true}></Route>
        </div>
    )
}

export default NavigationLinks