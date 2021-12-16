import React from "react";
import { useDispatch } from "react-redux";
import { setEditLecture, stateAdminAllCourses } from "../../actions/actionCreater";
import { Button } from "@material-ui/core";
import useStyles from "../Styling";
////////////////////////////////////////
const AdminLectures=(props)=>{
    const classes=useStyles();
    const dispatch=useDispatch()
    return(
        <div className={classes.student11}>
            <Button
                className={classes.studentReg}
                variant='contained'
                color='primary'
                onClick={()=>{
                props.history.push('/admin/lectures/addlecture')
                dispatch(stateAdminAllCourses())
                dispatch(setEditLecture({}))
            }}>
            Add Lecture
            </Button> <br/>
            <Button
                className={classes.studentsList}
                variant='contained'
                color='secondary'
                onClick={()=>{
                props.history.push('/admin/lectures/alllectures')
                dispatch(stateAdminAllCourses())
            }}>
            All Lectures
            </Button>
        </div>
    )
}

export default AdminLectures