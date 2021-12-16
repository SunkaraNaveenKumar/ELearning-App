import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { stateAdminLogin } from "../../actions/actionCreater";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from "../Styling";
import { Typography,Button } from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import swal from 'sweetalert'
////////////////////////////////
const AdminLogin=(props)=>{
    const classes=useStyles()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [formErrors,setErrors]=useState({})
    const errors={}
    const dispatch=useDispatch()
    const adminLoginError=useSelector((state)=>{
        return state.adminData.loginError
    })
    ///////////////////////
    localStorage.clear()
    ////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name
        const inputValue=e.target.value 
        if(inputType==='email')
        {
            setEmail(inputValue)
        }
        if(inputType==='password')
        {
            setPassword(inputValue)
        }
    }
    ////////////////////
    const runCallback=()=>{
        if(password.trim()==='')
        {
            errors.password='plz enter the password!'
        }
        if(email.trim()==='')
        {
            errors.email='plz enter your email!'
        }
    }
    /////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        runCallback()
        if(Object.keys(errors).length===0)
        {
            const formData={
                email,
                password,
            }
            dispatch(stateAdminLogin(formData,props))
            setErrors({})
            setEmail('')
            setPassword('')
            swal("Good job!", "you Successfully Logged in", "success");
        }
       else
       {
           setErrors(errors)
       }
    }
    return(
        <div  className={classes.Login}>
             <Grid container  spacing={2} className={classes.LoginForm}>
                <Grid item>
                <LockOpenIcon style={{fontSize:'30px'}}/>
                </Grid>
                <Grid item xs={6}>
                    {adminLoginError && <p style={{color:"red"}}>{adminLoginError}</p> }
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
                    <Button variant='contained' color='secondary' onClick={handleSubmit}>login</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AdminLogin