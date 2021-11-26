import React from "react";
import {Link,Route,withRouter,Switch} from 'react-router-dom'
import Admin from "../admin/Admin";
import Home from "./Home"
import AdminRegister from "../admin/AdminRegister"
import AdminLogin from "../admin/AdminLogin"
import Student from "../student/Student";
import StudentLogin from "../student/StudentLogin";
import {useSelector,useDispatch} from 'react-redux'
import { setAdminToggle } from "../../actions/actionCreater";
import AdminAccount from "../admin/AdminAccount";
import AdminDashboard from "../admin/AdminDashboard";
import AdminCourses from "../admin/AdminCourses";
import AdminStudents from "../admin/AdminStudents";
import RegisterStudent from "../admin/RegisterStudent";
import StudentsList from "../admin/StudentsList";
/////////////////////////////
    const NavigationLinks=(props)=>{
    const toggle =useSelector((state)=>{
        return state.adminError.toggle
    })
    const dispatch=useDispatch()
    //////////////////////////
    
    return(
        <div>
            <Link to='/'>Home</Link>|
            {!toggle ?(
                <>
                <Link to='/student'>Student</Link>|
                <Link to='/admin'>Admin</Link>|
                </>
            ):(
                <>
                <Link to='/admin/account'>Account</Link>|
                <Link to='/admin/students'>Students</Link>|
                <Link to='/dashboard'>Dashboard</Link>|
                <Link to='/courses'>courses</Link>|
                <Link to='' onClick={()=>{
                    dispatch(setAdminToggle(false))
                    localStorage.clear()
                    props.history.push('/')
                }}>Logout</Link>
                 </>
            )}
             
             
             <Switch>
             <Route path='/' component={Home} exact></Route>
             <Route path='/admin' component={Admin} exact></Route>
             <Route path='/student' component={Student} exact ></Route>
             <Route path="/student/login" component={StudentLogin}></Route>
             <Route path='/admin/register' component={AdminRegister} exact></Route>
             <Route path='/admin/login' component={AdminLogin} exact></Route>
             <Route path="/admin/account" component={AdminAccount} exact></Route>
             <Route path="/dashboard" component={AdminDashboard} exact></Route>
             <Route path="/courses" component={AdminCourses} exact></Route>
             <Route path="/admin/students" component={AdminStudents} exact></Route>
             <Route path="/admin/students/register" component={RegisterStudent} ></Route>
             <Route path="/admin/students/list" component={StudentsList} ></Route>
             </Switch>
        </div>
    )
}

export default withRouter(NavigationLinks)