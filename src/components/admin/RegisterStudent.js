import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { stateStudentRegister } from "../../actions/actionCreater";
const RegisterStudent=(props)=>{
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
        console.log(formData)
        dispatch(stateStudentRegister(formData))
        setUsername('')
        setEmail('')
        setPassword('')
        setAllow(false)
    }
    return(
        <div>
            <hr />
            <h2>Register Student</h2>
            {studentError &&  <p style={{color:'red'}}>{studentError}</p>}          
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={name} onChange={handleChange} placeholder='Enter name..'></input>
                <br />
                <input type='text' name='email' value={email} onChange={handleChange} placeholder='Enter email..'></input>
                <br />
                <input type='text' name='password' value={password} onChange={handleChange} placeholder='Enter password..'></input>
                <br />
                <input type='checkbox' name='allow'  checked={isAllowed} onChange={handleChange} ></input> Allow
                <br />
                <input type='submit' value='register'></input>
            </form>
        </div>
    )
}
export default RegisterStudent