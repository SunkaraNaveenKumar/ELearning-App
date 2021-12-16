import React,{useState} from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {stateStudentInfo,stateStudentAccountEdit,stateStudentDelete} from "../../actions/actionCreater";
import StudentAccountEditForm from './StudentAccountEditForm'
import Grid from '@material-ui/core/Grid';
import useStyles from "../Styling";
import { Typography } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
///////////////////////////////////////////
import { StyledTableCell,StyledTableRow } from "../styleTable";
///////////////////////////////////  
const StudentsList=(props)=>{
    const classes=useStyles();
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [isAllowed,setIsAllowed]=useState(false)
    const [id,setId]=useState('')
    const studentsList=useSelector((state)=>{
        return state.adminData.studentsList
    })
    const [toggle,setToggle]=useState(false)
    /////////////////////
    const handleEdit=(ele)=>{
        setName(ele.name)
        setEmail(ele.email)
        setIsAllowed(ele.isAllowed)
        setId(ele._id)
        setToggle(true)
    }
    /////////////////////
    const handleSave=()=>{
        const formData={
            name,
            email,
            isAllowed
        }
        dispatch(stateStudentAccountEdit(formData,id))
        setToggle(false)
        setId('')
    }
    /////////////////////
    const handleCancel=()=>{
        setToggle(false)
        setId('')
    }
    ///////////////////
    const handleDelete=(ele)=>{
        dispatch(stateStudentDelete(ele._id))
    }
    /////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name 
        const inputValue=e.target.value 
        if(inputType==='name')
        {
            setName(inputValue)
        }
        if(inputType==='email')
        {
            setEmail(inputValue)
        }
        if(inputType==='isAllowed')
        {
            setIsAllowed(e.target.checked)
        }
    }
    return(
        <div className={classes.student10}>
            <Grid container className={classes.students}>
                <Grid item className={classes.students1} xs={8}>
                    {studentsList.length>0 ?(
                        <>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell align="right">Email</StyledTableCell>
                                        <StyledTableCell align="right">View Details</StyledTableCell>
                                        <StyledTableCell align="right">Edit</StyledTableCell>
                                        <StyledTableCell align="right">Delete</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {studentsList.map((ele) => (
                                        <StyledTableRow key={ele._id}>
                                            <StyledTableCell component="th" scope="row">
                                                {ele.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{ele.email}</StyledTableCell>
                                            <StyledTableCell align="right">
                                            <IconButton  onClick={()=>{
                                                dispatch(stateStudentInfo(ele._id))
                                                }}>
                                                <VisibilityIcon />
                                            </IconButton>
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                <IconButton onClick={()=>{
                                                    handleEdit(ele)
                                                    }}>
                                                    <EditIcon color='primary'></EditIcon>
                                                </IconButton>                   
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                            <IconButton onClick={()=>{
                                                    handleDelete(ele)
                                                    }}>
                                               <DeleteIcon color='secondary'></DeleteIcon>
                                            </IconButton>
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
                <Grid item className={classes.students1} xs={4}>
                {toggle ? (
                <StudentAccountEditForm
                 name={name} 
                 email={email} 
                 isAllowed={isAllowed}
                 handleSave={handleSave}
                 handleChange={handleChange}
                 handleCancel={handleCancel}
                 />
           ):(
               <>
               <Grid item>
                  {studentsList.length>0 && (
                  <Typography variant='h4' color='secondary'>
                      Click On Edit To Edit Any Student Info
                    </Typography>
                    )}
                </Grid>
               </>
               
           )}
                </Grid>
            </Grid>
        </div>
    )
}
export default StudentsList