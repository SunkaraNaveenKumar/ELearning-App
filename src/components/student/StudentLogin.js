import React,{useState} from "react";

const StudentLogin=(props)=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    ////////////////////////
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
    ///////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email,
            password
        }
        console.log('studentlogin',formData)
        setEmail('')
        setPassword('')
    }
    return(
        <div>
            <hr />
            <h2>Student Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' value={email} onChange={handleChange} placeholder="Enter ur Email..."/>
                <br />
                <input type='text' name='password' value={password} onChange={handleChange} placeholder="Enter ur password..."/>
                <br />
                <input type='submit' value="login"/>
            </form>
        </div>
    )
}

export default StudentLogin