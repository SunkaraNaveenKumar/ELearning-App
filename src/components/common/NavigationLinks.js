import React,{useState} from "react";
import {Route,withRouter,Switch} from 'react-router-dom'
import swal from 'sweetalert';
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
import AdminAddCourse from "../admin/AdminAddCourse";
import AdminAllCourses from "../admin/AdminAllCourses";
import EnrollCourse from "../admin/EnrollCourse";
import UnEnrollCourse from "../admin/UnEnrollCourse";
import StudentAllCourses from "../student/StudentAllCourses";
import StudentMyCourses from "../student/StudentMyCourses";
import StudentCourses from "../student/StudentCourses";
import StudentAccount from "../student/StudentAccount";
import AdminLectures from "../admin/AdminLectures";
import AdminAddLecture from "../admin/adminAddLecture";
import AdminAllLectures from "../admin/AdminAllLectures";
import LectureList from "../admin/LectureList";
import StudentViewLectures from "../student/StudentViewLectures";
////////////////////////////////////////// Material Components
import useStyles from "../Styling";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import StudentsList from "../admin/StudentsList";
import RegisterStudent from "../admin/RegisterStudent";

    /////////////////////////////
    const NavigationLinks=(props)=>{
    const classes=useStyles()
    const dispatch=useDispatch()
    const  role=useSelector((state)=>{
        return state.adminorstudent.role
    })
    /////////////////////////menu items
    const [anchorEl, setAnchorEl] = useState(null);

    /////////////////////////////// admin button
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
     };

    return(
        <div>
            <AppBar position="static">
                    <Toolbar>
                        {role && <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>}
                        <Typography variant="h6" className={classes.title}>
                            E-Learning
                        </Typography>
                        <Button color="inherit" onClick={()=>{
                            props.history.push('/')
                        }}>Home</Button> 
                        {!role ?(                          // if admin or student not loged in
                        <>
                        <Button color="inherit" onClick={()=>{
                            props.history.push('/student/login')
                        }}>student</Button>
                        <Button color="inherit" onClick={(event)=>{
                           handleClick(event)
                        }}>Admin</Button>
                        <Menu //// when clicked on admin button menu opens
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                        <MenuItem onClick={()=>{
                            handleClose()
                            props.history.push('/admin/register')
                        }}>
                            Register
                        </MenuItem>
                        <MenuItem onClick={()=>{
                            handleClose()
                            props.history.push('/admin/login')
                        }}>Login</MenuItem>
                        </Menu>
                        </>
                        ):(
                        <>
                            {role==='admin'&&(              //////////// if admin
                        <>
                        <Button color="inherit" onClick={()=>{
                            props.history.push('/admin/account')
                            dispatch(stateAdminAccount())
                        }}>Account</Button>
                        <Button color="inherit" onClick={()=>{
                            props.history.push('/admin/students')
                            dispatch(stataStudentsList())
                        }}>Students</Button>

                        <Button color="inherit" onClick={()=>{
                            props.history.push('/admin/dashboard')
                        }}>DashBoard</Button>
                       <Button color="inherit" onClick={()=>{
                            props.history.push('/admin/courses')
                        }}>Courses</Button>
                        <Button color="inherit" onClick={()=>{
                            props.history.push('/admin/lectures')
                        }}>Lectures</Button>
                        <Button color="inherit" onClick={()=>{
                            props.history.push('/')
                            dispatch(setAdminorStudent({}))
                            localStorage.clear()
                            swal("Visit Again!", "you Successfully Logged out", "success");
                        }}>Logout</Button>
                       </>
                        )}
                        {role==='student'&&(                       //if student
                            <>
                        <Button color="inherit" onClick={()=>{
                            props.history.push('/student/courses')
                        }}>Courses</Button>
                        <Button color="inherit" onClick={()=>{
                            props.history.push('/student/account')
                        }}>Account</Button>
                        <Button color="inherit" onClick={()=>{
                            dispatch(setAdminorStudent({}))
                            localStorage.clear()
                            props.history.push('/')
                            swal("Visit Again!", "you Successfully Logged out", "success");
                        }}>Logout</Button>
                        </>
                    )}
                </>
            )}
            </Toolbar>
                </AppBar>
             <Switch>
             <Route path='/' component={Home} exact></Route>
             <Route path='/student' component={Student} exact ></Route>
             <Route path="/student/login" component={StudentLogin} exact></Route>
             <Route path='/admin/register' component={AdminRegister} exact></Route>
             <Route path='/admin/login' component={AdminLogin} exact></Route>
             <Route path="/admin/account" component={AdminAccount} exact></Route>
             <Route path="/admin/dashboard" component={AdminDashboard} exact></Route>
             <Route path='/admin/enroll/course' component={EnrollCourse}  exact></Route>
             <Route path='/admin/unenroll/course' component={UnEnrollCourse} exact></Route>
             <Route path="/admin/courses" component={AdminCourses} exact></Route>
             <Route path="/admin/students" component={AdminStudents} exact></Route> 
             <Route path="/admin/students/list" component={StudentsList} exact></Route>
            <Route path="/admin/students/register" component={RegisterStudent} exact></Route>
             <Route path="/admin/addcourse" component={AdminAddCourse}  exact></Route>
             <Route path="/admin/allcourses" component={AdminAllCourses}  exact></Route>
             <Route path='/admin/lectures' component={AdminLectures} exact></Route>
             <Route path='/admin/lectures/addlecture' component={AdminAddLecture} exact></Route>
             <Route path='/admin/lectures/alllectures' component={AdminAllLectures} exact></Route>
             <Route path='/admin/lectures/alllectures/:id' component={LectureList} exact></Route>
             <Route path='/student/courses' component={StudentCourses} exact ></Route>
             <Route path='/student/allcourses' component={StudentAllCourses} exact ></Route>
             <Route path='/student/mycourses' component={StudentMyCourses} exact ></Route>
             <Route path='/student/account' component={StudentAccount} exact></Route>
             <Route path='/student/mycourses/lectures/:id' component={StudentViewLectures} exact></Route>
             </Switch> 
                      
        </div>
    )
}

export default withRouter(NavigationLinks)