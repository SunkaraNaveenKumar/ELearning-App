import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { stateEnrollCourse } from "../../actions/actionCreater";
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
/////////////////////////////////////
import { StyledTableCell,StyledTableRow } from "../styleTable";
  ///////////////////////////////////
const EnrollCourse=(props)=>{
    const classes=useStyles()
    const dispatch=useDispatch()
    const studentsList=useSelector((state)=>{
        return state.adminData.studentsList
    })
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const [studentId,setStudentId]=useState('')
    const [courseId,setCourseId]=useState('')
    console.log('enroll',allCourses)
    const handleChange=(e)=>{
        if(e.target.name==='student')
        {
            setStudentId(e.target.value)
        }
        if(e.target.name==='course')
        {
            setCourseId(e.target.value)
        }
    }
    ///////////////////////////
    const handleEnroll=(e)=>{
        const data={
            studentId,
            courseId
        }
        dispatch(stateEnrollCourse(data))
        setCourseId('')
        setStudentId('')
    }
    return(

        <div className={classes.EnrollCourseComponent}>
            <Grid container spacing={2} className={classes.enroll}>
            <Grid item xs={6} className={classes.enroll1}>
            {studentsList.length>0 ?(
                        <>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell align="left">Email</StyledTableCell>
                                        <StyledTableCell align="left">select student</StyledTableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {studentsList.map((ele) => (
                                        <StyledTableRow key={ele._id}>
                                            <StyledTableCell component="th" scope="row">
                                                {ele.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{ele.email}</StyledTableCell>
                                            <StyledTableCell align="left">
                                            <FormControlLabel   name='student' value={ele._id} onChange={handleChange} checked={studentId===ele._id} control={<Radio />}  />
                                            </StyledTableCell>              
                                        </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ):(
                        <>
                            <Typography variant='h5'>
                                No Students yet,to register? <Link to='/admin/students/register'>Click</Link>
                            </Typography>
                        </>
                    )
                    }
            </Grid>
            <Grid item xs={6} className={classes.enroll1}>
            {allCourses.length>0 ?(
                        <>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell align="left">Author</StyledTableCell>
                                        <StyledTableCell align="left">select Course</StyledTableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allCourses.map((ele) => (
                                        <StyledTableRow key={ele._id}>
                                            <StyledTableCell component="th" scope="row">
                                                {ele.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{ele.author}</StyledTableCell>
                                            <StyledTableCell align="left">
                                            <FormControlLabel  name='course' value={ele._id} onChange={handleChange} checked={courseId===ele._id} control={<Radio />}/>
                                            </StyledTableCell>              
                                        </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ):(
                        <>
                            <Typography variant='h5'>
                            No Courses Created,to Create ? <Link to="/admin/addcourse">click</Link>
                            </Typography>
                        </>
                    )
                    }
            </Grid>
            <Grid item >
                <Button variant='contained' color='primary' onClick={handleEnroll} 
                 Disabled={allCourses.length===0 || studentsList.length===0}>Enroll</Button>
                </Grid>
            </Grid>
           
        </div>
    )
}

export default EnrollCourse