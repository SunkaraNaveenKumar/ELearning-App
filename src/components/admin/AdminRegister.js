import React,{useState} from "react";
import {Link} from 'react-router-dom' 
import {useDispatch} from 'react-redux'
import { asyncAdminRegister } from "../../actions/actionCreater";
const AdminRegister=(props)=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [academy,setAcademy]=useState('')
    const [formErrors,setErrors]=useState({})
    const [website,setWebsite]=useState('')
    const errors={}
    const dispatch=useDispatch()
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
            dispatch(asyncAdminRegister(formData))
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
        <div>
            <hr />
            <h2>Admin Register</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' value={username} onChange={handleChange} placeholder="Enter Your Name..." /> 
                {formErrors.username && <p style={{color:"red"}}>{formErrors.username}</p>}
                <br />
                <input type='text' name='email' value={email} onChange={handleChange} placeholder="Enter Your Email..." /> 
                {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
                <br />
                <input type='text' name='password' value={password} onChange={handleChange} placeholder="pasword..." /> 
                {formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
                <br />
                <input type='text' name='academy' value={academy} onChange={handleChange} placeholder="Enter Your Academy Name..." />
                {formErrors.academy && <p style={{color:"red"}}>{formErrors.academy}</p>}
                <br />
                <input type='text' name='website' value={website} onChange={handleChange} placeholder="website..." />
                <span>(Optional)</span>
                <br />
                <input type='submit' value='register' />
            </form> <br />
            <span>Already Registered?</span><span><Link to='/admin/login'>Login</Link></span>
        </div>
    )
}
export default AdminRegister