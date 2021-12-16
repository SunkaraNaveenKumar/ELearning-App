import React,{useState} from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { setCourseEditToggle, stateAdminCourseDelete, stateAdminCourseInfo } from "../../actions/actionCreater";
import AdminAddCourse from "./AdminAddCourse";
/////////////////////////////////////////
import { StyledTableCell,StyledTableRow } from "../styleTable";
/////////////////////////////////////
import { Typography } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";
import useStyles from "../Styling";
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Badge from '@material-ui/core/Badge';

/////////////////////////////////////////
const AdminAllCourses=(props)=>{
    const classes=useStyles()
    const dispatch=useDispatch()
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const courseEditToggle=useSelector((state)=>{
        return state.adminData.courseEditToggle
    })
    const [course,setCourse]=useState({})
    ///////////////////////////////////////
    const handleEdit=(id)=>{
        const course=allCourses.find(ele=>{
            return ele._id===id
        })
        setCourse(course)
       dispatch(setCourseEditToggle(true))
    }
    return(
        <>
        <div className={classes.Courses}>
         <Typography variant="h5" gutterBottom color='primary' className={classes.courseTitle}>All Courses
            <Badge badgeContent={allCourses.length} color="primary">
                <MenuBookIcon color='secondary' fontSize='large'/>
            </Badge>
          
        </Typography>
        <Grid container spacing={2} className={classes.course11}>
       
            <Grid item xs={8} className={classes.course12}>                
            {allCourses.length>0 ?(
                        <>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Course</StyledTableCell>
                                        <StyledTableCell align="right">catogery</StyledTableCell>
                                        <StyledTableCell align="right">Author</StyledTableCell>
                                        <StyledTableCell align="right">View Details</StyledTableCell>
                                        <StyledTableCell align="right">Edit</StyledTableCell>
                                        <StyledTableCell align="right">Delete</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allCourses.map((ele) => (
                                        <StyledTableRow key={ele._id}>
                                            <StyledTableCell component="th" scope="row">
                                                {ele.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{ele.category}</StyledTableCell>
                                            <StyledTableCell align="right">{ele.author}</StyledTableCell> 
                                            <StyledTableCell align="right">
                                                <IconButton onClick={()=>{
                                                    dispatch(stateAdminCourseInfo(ele._id))
                                                }}>
                                                    <VisibilityIcon/>
                                                </IconButton>
                                            </StyledTableCell> 
                                            <StyledTableCell align="right">
                                                <IconButton  onClick={()=>{
                                                    handleEdit(ele._id)
                                                }}>
                                                    <EditIcon color='primary'/>
                                                </IconButton>
                                            </StyledTableCell>  
                                            <StyledTableCell align="right">
                                                <IconButton onClick={()=>{
                                                    dispatch(stateAdminCourseDelete(ele._id))
                                                }}>
                                                    <DeleteIcon color='secondary'/>
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
                            <Typography variant='h4' color='secondary' gutterBottom>
                            No courses,create a course?<Link to="/admin/addcourse">click</Link>
                            </Typography>
                        </>
                    )
                    }
            </Grid>
            <Grid item xs={4} className={classes.course13}>
            {courseEditToggle ? (
                <AdminAddCourse courseEditToggle={courseEditToggle} course={course}/>
            ):(
                allCourses.length>0?(
                    <>
                    <Typography variant='h5' gutterBottom color='primary'>Click on edit to edit the course!</Typography>
                    <img className={classes.img14}src='https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img1'></img>
                    </>     
                ):(
                    <Typography variant='h5' gutterBottom color='primary'>No Courses!</Typography>
                )
            )}
            </Grid>
            </Grid>
        </div>
        </>
    )
}
export default AdminAllCourses