import React,{useState} from "react";

const AdminLogin=(props)=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [formErrors,setErrors]=useState({})
    const errors={}
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
            console.log('adminlogin',formData)
            setErrors({})
            setEmail('')
            setPassword('')
        }
       else
       {
           setErrors(errors)
       }
    }
    return(
        <div>
            <hr />
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' value={email} onChange={handleChange} placeholder="Enter Your Email..." /> 
                {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
                <br />
                <input type='text' name='password' value={password} onChange={handleChange} placeholder="pasword..." /> 
                {formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
                <br />
                <input type='submit' value='register' />
            </form>
        </div>
    )
}

export default AdminLogin