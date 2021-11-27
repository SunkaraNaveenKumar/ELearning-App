import React from "react";
import {Link,Route,withRouter,Switch} from 'react-router-dom'
import Admin from "../admin/Admin";
import Home from "./Home"
import AdminRegister from "../admin/AdminRegister"
import AdminLogin from "../admin/AdminLogin"
import Student from "../student/Student";
import StudentLogin from "../student/StudentLogin";
import {useSelector,useDispatch} from 'react-redux'
import { setAdminorStudent, stataStudentsList, stateAdminAccount } from "../../actions/actionCreater";
import AdminAccount from "../admin/AdminAccount";
import AdminDashboard from "../admin/AdminDashboard";
import AdminCourses from "../admin/AdminCourses";
import AdminStudents from "../admin/AdminStudents";
import RegisterStudent from "../admin/RegisterStudent";
import StudentsList from "../admin/StudentsList";
import AdminAddCourse from "../admin/AdminAddCourse";
import AdminAllCourses from "../admin/AdminAllCourses";

    /////////////////////////////
    const NavigationLinks=(props)=>{
    const dispatch=useDispatch()
    const  role=useSelector((state)=>{
        return state.adminorstudent.role
    })
    //////////////////////////
    
    return(
        <div>
            <Link to='/'>Home</Link>|
            {!role ?(
                <>
                <Link to='/student'>Student</Link>|
                <Link to='/admin'>Admin</Link>|
                </>
            ):(
                <>
                {role==='admin'&&(
                    <>
                    <Link to='/admin/account' onClick={()=>{
                        dispatch(stateAdminAccount())
                    }}>Account</Link>|
                    <Link to='/admin/students' onClick={()=>{
                        dispatch(stataStudentsList())
                    }}>Students</Link>|
                    <Link to='/admin/dashboard'>Dashboard</Link>|
                    <Link to='/admin/courses'>courses</Link>|
                    <Link to='' onClick={()=>{
                        dispatch(setAdminorStudent({}))
                        localStorage.clear()
                        props.history.push('/')
                        alert('admin succesfully logged out')
                    }}>Logout</Link>
                     </>
                )}
                {role==='student'&&(
                    <>
                    <Link to='/student/courses'>Courses</Link>|
                    <Link to=''onClick={()=>{
                         dispatch(setAdminorStudent({}))
                         localStorage.clear()
                         props.history.push('/')
                         alert('student successfully loged out')
                    }}>Logout</Link>
                    </>
                )}
                 </>
            )}
            
             <Switch>
             <Route path='/' component={Home} exact></Route>
             <Route path='/admin' component={Admin} exact></Route>
             <Route path='/student' component={Student} exact ></Route>
             <Route path="/student/login" component={StudentLogin} exact></Route>
             <Route path='/admin/register' component={AdminRegister} exact></Route>
             <Route path='/admin/login' component={AdminLogin} exact></Route>
             <Route path="/admin/account" component={AdminAccount} exact></Route>
             <Route path="/admin/dashboard" component={AdminDashboard} exact></Route>
             <Route path="/admin/courses" component={AdminCourses} exact></Route>
             <Route path="/admin/students" component={AdminStudents} exact></Route>
             <Route path="/admin/students/register" component={RegisterStudent} exact></Route>
             <Route path="/admin/students/list" component={StudentsList} exact></Route>
             <Route path="/admin/addcourse" component={AdminAddCourse} exact ></Route>
             <Route path="/admin/allcourses" component={AdminAllCourses} exact ></Route>
             </Switch>
        </div>
    )
}

export default withRouter(NavigationLinks)