import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { stateStudentRegister } from "../../actions/actionCreater";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from "../Styling";
import { Typography,Button } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
///////////////////////////////
const RegisterStudent=(props)=>{
    const classes=useStyles()
    const [name,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isAllowed,setAllow]=useState(false)
    const dispatch=useDispatch()
    const studentError=useSelector((state)=>{
        return state.adminData.studentError
    })
    /////////////////////////////////
    const handleChange=(e)=>{
        const inputType = e.target.name 
        const inputValue=e.target.value
        if(inputType==='name')
        {
            setUsername(inputValue)
        }
        if(inputType==='email')
        {
            setEmail(inputValue)
        }
        if(inputType==='password')
        {
            setPassword(inputValue)
        }
        if(inputType==='allow')
        {
            setAllow(e.target.checked)
        }
    }
    /////////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name,
            email,
            password,
            isAllowed
        }
        dispatch(stateStudentRegister(formData))
        setUsername('')
        setEmail('')
        setPassword('')
        setAllow(false)
    }
    return(
        <div className={classes.mainStudentRegister} >
            <Grid container xs={3}>
                <img  className={classes.studentsImg} src='https://image.shutterstock.com/image-photo/group-students-smiling-standing-together-260nw-713463466.jpg' alt='studentsList'></img>
            </Grid>
            <Grid container className={classes.studentRegister} xs={6} spacing={2}>
            <Grid item >
               <Typography variant='h4'>Register a Student</Typography>
            </Grid>
            <Grid item>
            {studentError &&  <p style={{color:'red'}}>{studentError}</p>}  
            </Grid>
            <Grid item>
            <TextField
                     id="outlined-basic" 
                     name='name'
                     label="name..." 
                     value={name}
                     onChange={handleChange}
                     variant="outlined" 
                     />
            </Grid>
            <Grid item>
            <TextField
                     id="outlined-basic" 
                     name='email'
                     label="Email..." 
                     value={email}
                     onChange={handleChange}
                     variant="outlined" 
                     />
            </Grid>
            <Grid item>
            <TextField
                     id="outlined-basic" 
                     name='password'
                     label="password" 
                     value={password}
                     onChange={handleChange}
                     variant="outlined" 
                     />
            </Grid>
            <Grid item>
            <Checkbox
                    color="primary"
                    name='allow' 
                    checked={isAllowed} 
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                /> Allow
            </Grid>
            <Grid item >
            <Button variant='contained' color='secondary' onClick={handleSubmit}>Register</Button>
            </Grid>
            </Grid>
        </div>
    )
}
export default RegisterStudent