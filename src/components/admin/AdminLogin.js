import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { stateAdminLogin } from "../../actions/actionCreater";
const AdminLogin=(props)=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [formErrors,setErrors]=useState({})
    const errors={}
    const dispatch=useDispatch()
    const adminLoginError=useSelector((state)=>{
        return state.adminError.loginError
    })
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
            {adminLoginError && <p style={{color:"red"}}>{adminLoginError}</p>}
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' value={email} onChange={handleChange} placeholder="Enter Your Email..." /> 
                {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
                <br />
                <input type='text' name='password' value={password} onChange={handleChange} placeholder="pasword..." /> 
                {formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
                <br />
                <input type='submit' value='login' />
            </form>
        </div>
    )
}

export default AdminLogin