import React from "react";
import {  stateAdminAllCourses } from "../../actions/actionCreater";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import useStyles from "../Styling";

const AdminDashboard=(props)=>{
    const classes=useStyles();
    const dispatch=useDispatch()
    return (
        <div className={classes.student11}>
            <Button
                className={classes.studentReg}
                variant='contained'
                color='primary'
                onClick={()=>{
                props.history.push('/admin/enroll/course')
                dispatch(stateAdminAllCourses())
            }}>
            Enroll Student
            </Button> <br/>
            <Button
                className={classes.studentsList}
                variant='contained'
                color='secondary'
                onClick={()=>{
                props.history.push('/admin/unenroll/course' )
                dispatch(stateAdminAllCourses())
            }}>
            UnEnroll Student
            </Button>
        </div>
    )
}

export default AdminDashboard