import React,{useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import {stateStudentInfo,stateStudentAccountEdit,stateStudentDelete} from "../../actions/actionCreater";
import StudentAccountEditForm from './StudentAccountEditForm'
const StudentsList=(props)=>{
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [isAllowed,setIsAllowed]=useState(false)
    const [id,setId]=useState('')
    const studentsList=useSelector((state)=>{
        return state.adminError.studentsList
    })
    const [toggle,setToggle]=useState(false)
    /////////////////////
    const handleEdit=(ele)=>{
        setName(ele.name)
        setEmail(ele.email)
        setIsAllowed(ele.isAllowed)
        setId(ele._id)
        setToggle(true)
    }
    /////////////////////
    const handleSave=()=>{
        const formData={
            name,
            email,
            isAllowed
        }
        dispatch(stateStudentAccountEdit(formData,id))
        setToggle(false)
        setId('')
    }
    /////////////////////
    const handleCancel=()=>{
        setToggle(false)
        setId('')
    }
    ///////////////////
    const handleDelete=(ele)=>{
        dispatch(stateStudentDelete(ele._id))
    }
    /////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name 
        const inputValue=e.target.value 
        if(inputType==='name')
        {
            setName(inputValue)
        }
        if(inputType==='email')
        {
            setEmail(inputValue)
        }
        if(inputType==='isAllowed')
        {
            setIsAllowed(e.target.checked)
        }
    }
    return(
        <div>
           <ul>
            {studentsList.map(ele=>{
                return (
                    <li key={ele._id}>
                        {ele.name},
                        {ele.email}
                        <button onClick={()=>{dispatch(stateStudentInfo(ele._id))}}>View Details</button>
                        <button onClick={()=>{handleEdit(ele)}}>Edit</button>
                        <button onClick={()=>{handleDelete(ele)}}>Delete</button>
                    </li>
                  )
            })}
           </ul>
           {toggle ? (
                <StudentAccountEditForm
                 name={name} 
                 email={email} 
                 isAllowed={isAllowed}
                 handleSave={handleSave}
                 handleChange={handleChange}
                 handleCancel={handleCancel}
                 />
           ):(
               <h2>Click On Edit To Edit Any Student Info</h2>
           )}
        </div>
    )
}
export default StudentsList