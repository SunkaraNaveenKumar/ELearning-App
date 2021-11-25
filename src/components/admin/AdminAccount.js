import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { editAdminAccount, setAdminEdit } from "../../actions/actionCreater";
const AdminAccount=(props)=>{
    const dispatch=useDispatch()
    const accountData=useSelector((state)=>{
        return state.adminError.account
    })
    const edittoggle=useSelector((state)=>{
        return state.adminError.edittoggle
    })
    const [username,setUsername]=useState(accountData.username)
    const [email,setEmail]=useState(accountData.email)
    /////////////////////////
    useEffect(()=>{
        setUsername(accountData.username)
        setEmail(accountData.email)
      
    },[edittoggle,accountData.username,accountData.email])
    /////////////////////////
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
       
    }
    ///////////////////////
    const handleSave=(e)=>{
        e.preventDefault()
        const formData={
            username,
            email,
            academy:{name:accountData.academy.name}
        }
        dispatch(editAdminAccount(formData))
}
    return(
        <div>
            {Object.keys(accountData).length>0 && (
                <>
                {edittoggle ? (
                    <>
                    <form >
                        <input type="text" name='username' value={username} onChange={handleChange}/> <br/>
                        <input type="text" name='email' value={email} onChange={handleChange}/> <br/>
                       
                       
                        <button onClick={handleSave}>save</button>
                        <button onClick={()=>{dispatch(setAdminEdit(false))}}>cancel</button>
                    </form>
                    </>
                ):(
                    <>
                    <button onClick={()=>{dispatch(setAdminEdit(true))}}>Edit</button>
                    <h2>UserName-{accountData.username}</h2>
                    <h3>Email-{accountData.email}</h3>
                    <h3>Academy-{accountData.academy.name}</h3>
                    </>
                )}
                </>
            )}
        </div>
    )
}

export default AdminAccount