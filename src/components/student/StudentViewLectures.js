import React,{useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { stateAdminCourseLectures } from "../../actions/actionCreater";
import ReactPlayer from 'react-player'
///////////////////////// Material Components
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import useStyles from "../Styling";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";
//////////////////////////
import { StyledTableCell,StyledTableRow } from "../styleTable";
//////////////////////////
const StudentViewLectures=(props)=>{
    const classes=useStyles();
    const [lectureUrl,setUrl]=useState('')
    const [lectureName,setName]=useState('')
    const id=props.match.params.id
    const dispatch=useDispatch()
    const courseLectures=useSelector((state)=>{
        return state.adminData.courseLectures
    })
    ///////////////////
    useEffect(()=>{
        dispatch(stateAdminCourseLectures(id))
    },[dispatch,id])
    return(
        <div className={classes.root5}>
            {courseLectures.length>0 ?(
                <>
                <Grid container className={classes.viewLecture}>
                    <Grid item xs={6} className={classes.viewLecture1}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Lecture</StyledTableCell>
                                        <StyledTableCell align="center">Watch Lecture</StyledTableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {courseLectures.map((lecture) => (
                                        <StyledTableRow key={lecture._id}>
                                            <StyledTableCell component="th" scope="row">
                                                {lecture.title}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <Button variant='contained' color='primary' onClick={()=>{
                                                      setUrl(lecture.assetURL)
                                                      setName(lecture.title)
                                                }}>Watch Lecture</Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </Grid>
                    <Grid item xs={6} className={classes.viewLecture2}>
                        {lectureUrl==='' ?(
                            <>
                            <Grid item className={classes.note5}>
                            <Typography variant="h4" color='primary'>click on any lecture to watch lecture</Typography>
                            </Grid>
                            </>
                        ):(
                            <>
                            <Typography variant='h4' color='secondary'>Lecture-{lectureName}</Typography>
                              <ReactPlayer width='800px' height='560px' controls url={lectureUrl} />
                            </>
                        )}
                    </Grid>
                    
            </Grid>
                </>
            ):(
                <>
                <Typography variant="h4" >No Lectures to watch</Typography>
                </>
            )}
        </div>
    )
}

export default StudentViewLectures