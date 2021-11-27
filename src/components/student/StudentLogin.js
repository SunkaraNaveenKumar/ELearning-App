import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { stateStudentLogin } from "../../actions/actionCreater";

const StudentLogin=(props)=>{
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
    }
    return(
        <div>
            <hr />
            <h2>Student Login</h2>
            {studentLoginError && <p style={{color:"red"}}>{studentLoginError}</p> }
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