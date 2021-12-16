import React,{useState} from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { stateUnEnrollCourse } from "../../actions/actionCreater";
import { Grid } from "@material-ui/core";
import useStyles from "../Styling";
import { Typography } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
/////////////////////////////////////////////
import { StyledTableCell,StyledTableRow } from "../styleTable";
  ////////////////////////////////
const UnEnrollCourse=(props)=>{
    const dispatch=useDispatch()
    const classes=useStyles()
    const [valueId,setValueId]=useState('')// unique radio button
    const [studentId,setStudentId]=useState('')
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const studentsList=useSelector((state)=>{
        return state.adminData.studentsList
    })
    /////////////////////////
    const handleChange=(e,ele)=>{
        setValueId(e.target.value)
        setStudentId(ele.student)
    }
    //////////////////////
    const handleUnEnroll=(id)=>{
        const data={
            courseId:id,
            studentId
        }
        setStudentId('')
        dispatch(stateUnEnrollCourse(data))
    }
    /////////////////////////
    const callBack=(ele)=>{
        const findStudent=studentsList.find(stu=>{
            return stu._id===ele.student
         })
         if(findStudent===undefined)
         {
             return {email:'Deleted Student(Plz unenroll)'}
         }
         else
         {
            return findStudent
         }
    }
    ///////////////
    const callBackEnroll=()=>{
        const toggle=allCourses.some(ele=>{
            return ele.students.length>0
        })
        return toggle
    }
    /////////////////
    return(
        <>
        <div className={classes.unEnroll}>
            <Grid container className={classes.unEnroll1}>
            <Grid item>
            {callBackEnroll() ?(
                        <>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Course</StyledTableCell>
                                        <StyledTableCell align="left">Student Enrolled</StyledTableCell>
                                        <StyledTableCell align="left">select a student</StyledTableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allCourses.map((course) => (
                                        <StyledTableRow key={course._id}>
                                            <StyledTableCell component="th" scope="row">
                                                {course.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">
                                            {course.students.length>0?(
                                    <ul>
                                        {course.students.map(ele=>{
                                            return (
                                                <li key={ele._id}>
                                                    {studentsList.length>0 && <>{callBack(ele).email}</>} 
                                                    <FormControlLabel
                                                        name={course.name} 
                                                        value={ele._id} 
                                                        onChange={(e)=>handleChange(e,ele)}
                                                        checked={valueId===ele._id}
                                                        control={<Radio />}/>
                                                </li>
                                             )
                                         })}
                                     </ul>
                                    ):(
                                        <>
                                        <p>No Students Enrolled to this Course</p>
                                        </>
                                    )}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">
                                            {course.students.length>0 ?(
                                            <Button variant='contained'  onClick={()=>handleUnEnroll(course._id)}>
                                                UnEnroll
                                            </Button>
                                ):(
                                <p>No students to UnEnroll</p>
                                )}
                                            </StyledTableCell>              
                                        </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ):(
                        <>
                        <Grid item classname={classes.unEnrollNote}>
                            <Typography variant='h5'>
                            No students enrolled to  courses,to enroll ? <Link to="/admin/enroll/course">click</Link>
                            </Typography>
                            </Grid>
                        </>
                    )
                }
            </Grid>
            </Grid>
           
        </div>
        </>
    )
}
export default UnEnrollCourse