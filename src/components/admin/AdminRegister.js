import React,{useState} from "react";
import {Link} from 'react-router-dom' 
import {useDispatch,useSelector} from 'react-redux'
import { asyncAdminRegister } from "../../actions/actionCreater";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from "../Styling";
import { Typography,Button } from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
const AdminRegister=(props)=>{
    const classes=useStyles()
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [academy,setAcademy]=useState('')
    const [formErrors,setErrors]=useState({})
    const [website,setWebsite]=useState('')
    const errors={}
    const dispatch=useDispatch()
    const adminRegisterError=useSelector((state)=>{
        return state.adminData.registerError
    })
    ////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name
        const inputValue=e.target.value 
        if(inputType==='username')
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
        if(inputType==="academy")
        {
            setAcademy(inputValue)
        }
        if(inputType==='website')
        {
            setWebsite(inputValue)
        }
    }
    ////////////////////
    const runCallback=()=>{
        if(username.trim()==='')
        {
            errors.username='plz enter your name!'
        }
        if(password.trim()==='')
        {
            errors.password='plz enter the password!'
        }
        if(email.trim()==='')
        {
            errors.email='plz enter your email!'
        }
        if(academy.trim()==='')
        {
            errors.academy='plz enter the academy name!'
        }
    }
    /////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        runCallback()
        if(Object.keys(errors).length===0)
        {
            const formData={
                "username":username,
                "email":email,
                "password":password,
                "academy":{name:academy,website:website},
            }
            dispatch(asyncAdminRegister(formData,props))
            setErrors({})
            setUsername('')
            setPassword('')
            setEmail('')
            setAcademy('')
        }
        else{
            setErrors(errors)
        }
        
    }
    return(
        <div className={classes.Login}>
              <Grid container  spacing={2} className={classes.LoginForm}>
                <Grid item>
                <LockOpenIcon style={{fontSize:'30px'}}/>
                </Grid>
                <Grid item xs={6}>
                    {adminRegisterError && <p style={{color:"red"}}>{adminRegisterError}</p> }
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' className={classes.loginText}>Register</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     name='username'
                     label="username..." 
                     value={username}
                     onChange={handleChange}
                     variant="outlined" 
                     />
                </Grid>
                {formErrors.username && <p style={{color:"red"}}>{formErrors.username}</p>}
                <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     label="email..."
                     name='email'
                     value={email}
                     onChange={handleChange}
                     variant="outlined" />
                </Grid>
                {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
                <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     label="password..."
                     name='password'
                     value={password}
                     onChange={handleChange}
                     variant="outlined" />
                </Grid>
                {formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
                <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     label="academy name..."
                     name='academy'
                     value={academy}
                     onChange={handleChange}
                     variant="outlined" />
                </Grid>
                {formErrors.academy && <p style={{color:"red"}}>{formErrors.academy}</p>}
                <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     label="Website... (Optional)"
                     name='website'
                     value={website}
                     onChange={handleChange}
                     variant="outlined" />
                     
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained' color='secondary' onClick={handleSubmit}>Register</Button>
                </Grid>
                <Grid item>
                    <span>Already Registered?</span><span><Link to='/admin/login'>Login</Link></span>
                </Grid>
            </Grid>
           
        </div>
    )
}
export default AdminRegister