import React from "react";
import { stateAdminAllCourses } from "../../actions/actionCreater";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import useStyles from "../Styling";
const StudentCourses=(props)=>{
    const dispatch=useDispatch()
    const classes=useStyles();
    return (
        <div className={classes.stucourse}>
            <Button className={classes.stucourse1} variant='contained' color='primary' onClick={()=>{
                props.history.push('/student/allcourses')
                dispatch(stateAdminAllCourses())
            }}>All Courses</Button>
            <Button className={classes.stucourse1} variant='contained' color='secondary' onClick={()=>{
                props.history.push('/student/mycourses')
                dispatch(stateAdminAllCourses())
            }}>My Courses</Button>
        </div>
    )
}

export default StudentCourses