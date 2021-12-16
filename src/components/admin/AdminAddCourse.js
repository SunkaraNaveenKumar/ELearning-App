import React,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import {setCourseEditToggle, stateAdminAddCourse, stateAdminCourseEdit} from '../../actions/actionCreater'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from "../Styling";
import { Typography,Button } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
/////////////////////////////////
const AdminAddCourse=(props)=>{
    const {courseEditToggle,course}=props 
    const classes=useStyles()
    //////////////////////////
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [duration,setDuration]=useState('')
    const [releaseDate,setReleaseDate]=useState('')
    const [category,setCategory]=useState('')
    const [validity,setValidity]=useState('')
    const [level,setLevel]=useState('')
    const [author,setAuthor]=useState('')
    ////////////////////////////
    useEffect(()=>{
        if(courseEditToggle)
        {
           setName(course.name)
           setDescription(course.description)
           setDuration(course.duration)
           setReleaseDate(course.releaseDate)
           setCategory(course.category)
           setValidity(course.validity)
           setLevel(course.level)
           setAuthor(course.author)
        }
    },[courseEditToggle,course])
    /////////////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name
        const inputValue=e.target.value
        if(inputType==='name')
        {
            setName(inputValue)
        }
        if(inputType==='description')
        {
            setDescription(inputValue)
        }
        if(inputType==='duration')
        {
            setDuration(inputValue)
        }
        if(inputType==='releaseDate')
        {
            setReleaseDate(inputValue)
        }
        if(inputType==='category')
        {
            setCategory(inputValue)
        }
        if(inputType==='validity')
        {
            setValidity(inputValue)
        }
        if(inputType==='level')
        {
            setLevel(inputValue)
        }
        if(inputType==='author')
        {
            setAuthor(inputValue)
        }
    }
    ///////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(courseEditToggle)
        {
            const formData={
                name,
                description,
                duration,
                category,
                validity,
                level,
                author
            }
            dispatch(stateAdminCourseEdit(formData,course._id))
        }
        else
        {
            const formData={
                name,
                description,
                duration,
                releaseDate,
                category,
                validity,
                level,
                author
            }
            dispatch(stateAdminAddCourse(formData))
        }
        setName('')
        setDescription('')
        setDuration('')
        setReleaseDate('')
        setValidity('')
        setCategory('')
        setAuthor('')
        setLevel('')
    }
    return(
        <>
        <div className={classes.addCourse}>
            <Grid container className={classes.addCourse1} spacing={2}>
                {!courseEditToggle && <Grid item xs={4}>
                    <img className={classes.img1} 
                    src='https://www.reliablesoft.net/wp-content/uploads/2019/08/digital-marketing-courses.png' 
                    alt='addcourse'></img>
                </Grid> }
                <Grid item xs={8} className={classes.align2} spacing={2}>
                <Grid item >
                    <Typography variant="h4" color='primary'>{courseEditToggle ? 'Edit Course': 'Add Course'}</Typography>
                </Grid>
                <Grid item >
                    <TextField
                        id="outlined-basic" 
                        name='name'
                        label="Name..." 
                        value={name}
                        onChange={handleChange}
                        variant="outlined" 
                    />
                     </Grid><br />
                <Grid item>
                    <TextField
                        id="outlined-basic" 
                        name='description'
                        label="description..." 
                        value={description}
                        onChange={handleChange}
                        variant="outlined" 
                    />
                </Grid> <br />
                <Grid item>
                    <TextField
                        id="outlined-basic" 
                        name='duration'
                        label="duration..." 
                        value={duration}
                        onChange={handleChange}
                        variant="outlined" 
                    />
                </Grid>
               <Grid item>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">category</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        name='category'
                        value={category}
                        onChange={handleChange}
                        label="category"
                    >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='HTML'>HTML</MenuItem>
                <MenuItem value="CSS">CSS</MenuItem>
                <MenuItem value="javascript">javascript</MenuItem>
                <MenuItem value="reactjs">reactjs</MenuItem>
                <MenuItem value="nodejs">nodejs</MenuItem>
                <MenuItem value="expressjs">expressjs</MenuItem>
                <MenuItem value="mongodb">mongodb</MenuItem>
                 </Select>
                </FormControl>
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-basic" 
                        name='validity'
                        label="validity..." 
                        value={validity}
                        onChange={handleChange}
                        variant="outlined" 
                    />
            </Grid>
            <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">level</InputLabel>
             <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name='level'
                value={level}
                onChange={handleChange}
                label="level"
            >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='beginner'>beginner</MenuItem>
          <MenuItem value="intermediate">intermediate</MenuItem>
          <MenuItem value="expert">expert</MenuItem>
        </Select>
        </FormControl>
      </Grid>
      <Grid item>
                <TextField
                    id="outlined-basic" 
                    name='author'
                    label="author..." 
                    value={author}
                    onChange={handleChange}
                    variant="outlined" 
                />
            </Grid>
            <Grid item>
            {courseEditToggle ? (
               <div>
                   <Button variant='contained' color='primary' onClick={(e)=>{
                        handleSubmit(e)
                        dispatch(setCourseEditToggle(false))
                        }}>
                        Save
                   </Button>
                   <Button variant='contained' color='secondary' onClick={()=>{dispatch(setCourseEditToggle(false))}}>
                        cancel
                   </Button>
                </div>
                ):(
                    <>
                        <Button variant='contained' color='secondary' onClick={handleSubmit}>
                            ADD
                        </Button>
                
                </>
                )}
                </Grid>
                </Grid>
            </Grid>        
        </div>
        </>
    )
}

export default AdminAddCourse