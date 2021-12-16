import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { stateStudentLogin } from "../../actions/actionCreater";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useStyles from "../Styling";
import { Typography,Button } from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import swal from 'sweetalert'
////////////////////////////////////
const StudentLogin=(props)=>{
    const classes=useStyles()
    const dispatch=useDispatch()
    const studentLoginError=useSelector((state)=>{
        return state.studentData.studentLoginError
    })
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    ////////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name 
        const inputValue=e.target.value 
        if(inputType==='email')
        {
            console.log(inputValue)
            setEmail(inputValue)
        }
        if(inputType==='password')
        {
            setPassword(inputValue)
        }
    }
    ///////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email,
            password
        }
        dispatch(stateStudentLogin(formData,props))
        setEmail('')
        setPassword('')
        swal("Good Job!", "you Successfully Logged in", "success");
    }
    return(
        <div className={classes.Login}>
            <Grid container  spacing={2} className={classes.LoginForm}>
                <Grid item>
                <LockOpenIcon style={{fontSize:'30px'}}/>
                </Grid>
                <Grid item xs={6}>
                    {studentLoginError && <p style={{color:"red"}}>{studentLoginError}</p> }
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' className={classes.loginText}>Login</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     name='email'
                     label="Email..." 
                     value={email}
                     onChange={handleChange}
                     variant="outlined" 
                     />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     label="password..."
                     name='password'
                     value={password}
                     onChange={handleChange}
                     variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained' color='secondary' onClick={handleSubmit}>login</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default StudentLogin