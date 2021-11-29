import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import AdminAddLecture from "./adminAddLecture";
import { setEditLecture, stateAdminCourseLectures, stateAdminLectureDelete, stateAdminLectureView } from "../../actions/actionCreater";
//////////////////////////////////Material Components
import useStyles from "../Styling";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
const LectureList=(props)=>{
    const id= props.match.params.id
    const classes = useStyles();
    const dispatch=useDispatch()
    const courseLectures=useSelector((state)=>{
        return state.adminData.courseLectures
    })
    const editLecture=useSelector((state)=>{
        return state.adminData.editLecture
    })
    ///////////////////////
    useEffect(()=>{
        dispatch(stateAdminCourseLectures(id))
    },[dispatch,id])
    //////////////////////////
    ////////////////////
    return(
        <div>
           <Grid container className={classes.root} >
                <Grid item xs={8} className={classes.lecturesList} >
                    {courseLectures.length>0?(
                        <>
                        {courseLectures.map(lecture=>{
                       return  <Grid item xs={12} className={classes.lecture} key={lecture._id}>
                           <Grid item xs={6} className={classes.lectureTitle}>
                               <Typography variant="h5">{lecture.title}</Typography>
                           </Grid>
                           <Grid item xs={6} className={classes.lectureBtns}>
                           <Button variant="contained" onClick={()=>{
                               dispatch(stateAdminLectureView(id,lecture._id))
                           }}>View Details</Button>
                           <Button variant="contained" color="primary" onClick={()=>{
                               dispatch(setEditLecture(lecture))
                           }}>Edit</Button>
                           <Button variant="contained" color="secondary" onClick={()=>{
                               dispatch(stateAdminLectureDelete(id,lecture._id))
                           }}>Delete</Button>
                           </Grid>
                           </Grid>
                   })}
                        </>
                    ):(
                        <>
                        <Typography variant='h3'>No Lectures available on this Course Add a Lecture</Typography>
                        </>
                    )}
                   
                </Grid>
                <Grid item xs={4} className={classes.editLecture}>
                    {Object.keys(editLecture).length>0 ?(
                        <>
                        <Grid item className={classes.editForm}>
                        <AdminAddLecture id={id} />
                        </Grid>
                        </>
                    ):(
                        <>
                        {courseLectures.length>0 ?(
                            <>
                            <Grid item className={classes.editNote}><Typography variant="h4" color="primary">Click On Edit to Make Changes in The Lecture</Typography></Grid>
                            </>
                        ):(
                            <>
                            <Grid item className={classes.plusicon}>
                            <IconButton onClick={()=>{ props.history.push('/admin/lectures/addlecture')}}>
                                <AddCircleIcon fontSize='large'/>
                            </IconButton>
                            </Grid>
                            </>
                        )}
                         
                        </>
                    )}
                   
                    
                </Grid>
           </Grid>
        </div>
    )
}

export default LectureList