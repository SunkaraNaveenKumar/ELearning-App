import React from "react";
import {useDispatch} from 'react-redux'
import { stateAdminAllCourses } from "../../actions/actionCreater";
import { Button } from "@material-ui/core";
import useStyles from "../Styling";
const AdminCourses=(props)=>{
    const classes=useStyles();
    const dispatch=useDispatch()
    return(
        <div className={classes.student11}>
            <Button
                className={classes.studentReg}
                variant='contained'
                color='primary'
                onClick={()=>{
                props.history.push("/admin/addcourse")
                dispatch(stateAdminAllCourses())
            }}>
            Create Course
            </Button> <br/>
            <Button
                className={classes.studentsList}
                variant='contained'
                color='secondary'
                onClick={()=>{
                props.history.push("/admin/allcourses")
                dispatch(stateAdminAllCourses())
            }}>
            All Courses
            </Button>
        </div>
    )
}

export default AdminCourses