import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "../Styling";
const AdminStudents=(props)=>{
    const classes=useStyles();
    return(
        <div className={classes.student11}>
            <Button
            className={classes.studentReg}
            variant='contained'
            color='primary'
             onClick={()=>{
                 props.history.push('/admin/students/register')
                 }}>
                Register Student
            </Button> <br/>
            <Button
            className={classes.studentsList}
            variant='contained'
            color='secondary'
             onClick={()=>{
                 props.history.push('/admin/students/list' )
                 }}>
                StudentsList
            </Button>
        </div>
    )
}
export default AdminStudents