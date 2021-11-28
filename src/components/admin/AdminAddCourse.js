import React,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import {setCourseEditToggle, stateAdminAddCourse, stateAdminCourseEdit} from '../../actions/actionCreater'
const AdminAddCourse=(props)=>{
    const {courseEditToggle,course}=props 
    //////////////////////////
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [duration,setDuration]=useState('')
    const [releaseDate,setReleaseDate]=useState('')
    const [category,setCategory]=useState('')
    const [validity,setValidity]=useState('')
    const [level,setLevel]=useState('')
    const [author,setAuthor]=useState('')
    ////////////////////////////
    useEffect(()=>{
        if(courseEditToggle)
        {
           setName(course.name)
           setDescription(course.description)
           setDuration(course.duration)
           setReleaseDate(course.releaseDate)
           setCategory(course.category)
           setValidity(course.validity)
           setLevel(course.level)
           setAuthor(course.author)
        }
    },[courseEditToggle,course])
    /////////////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name
        const inputValue=e.target.value
        if(inputType==='name')
        {
            setName(inputValue)
        }
        if(inputType==='description')
        {
            setDescription(inputValue)
        }
        if(inputType==='duration')
        {
            setDuration(inputValue)
        }
        if(inputType==='releaseDate')
        {
            setReleaseDate(inputValue)
        }
        if(inputType==='category')
        {
            setCategory(inputValue)
        }
        if(inputType==='validity')
        {
            setValidity(inputValue)
        }
        if(inputType==='level')
        {
            setLevel(inputValue)
        }
        if(inputType==='author')
        {
            setAuthor(inputValue)
        }
    }
    ///////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(courseEditToggle)
        {
            const formData={
                name,
                description,
                duration,
                category,
                validity,
                level,
                author
            }
            dispatch(stateAdminCourseEdit(formData,course._id))
        }
        else
        {
            const formData={
                name,
                description,
                duration,
                releaseDate,
                category,
                validity,
                level,
                author
            }
            dispatch(stateAdminAddCourse(formData))
        }
        setName('')
        setDescription('')
        setDuration('')
        setReleaseDate('')
        setValidity('')
        setCategory('')
        setAuthor('')
        setLevel('')
    }
    return(
        <div>
            {courseEditToggle ? <h2>Edit Course</h2>: <h2>Add Course</h2>}
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={name} onChange={handleChange} placeholder='Enter Course Name....' ></input><br/>
                <textarea name="description" value={description} onChange={handleChange} placeholder="Description...."/> <br/>
                <input type='text' name='duration' value={duration} onChange={handleChange} placeholder='Duration....' ></input><br/>
                {!courseEditToggle&&<><input type='text' name='releaseDate' value={releaseDate} onChange={handleChange} placeholder='Release Date....' ></input><br/></>}
                <select name="category" value={category} onChange={handleChange}>
                    <option value=''>select</option>
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='javascript'>javascript</option>
                    <option value='reactjs'>reactjs</option>
                    <option value='nodejs'>nodejs</option>
                    <option value='expressjs'>expressjs</option>
                    <option value='mongodb'>mongodb</option>
                </select> <br/>
                <input type='text' name='validity' value={validity} onChange={handleChange} placeholder='validity....' ></input><br/>
                <select name="level" value={level} onChange={handleChange}>
                    <option value=''>select</option>
                    <option value='beginner'>beginner</option>
                    <option value='intermediate'>intermediate</option>
                    <option value='expert'>expert</option>
                </select> <br/>
                <input type='text' name='author' value={author} onChange={handleChange} placeholder='Enter author Name....' ></input><br/>
               {courseEditToggle ? (
               <div>
                   <button onClick={(e)=>{
                        handleSubmit(e)
                       dispatch(setCourseEditToggle(false))
                       }}>Save</button> 
                   <button onClick={()=>{dispatch(setCourseEditToggle(false))}}>Cancel</button>
                </div>
                ):(
                <button onClick={handleSubmit}>Add</button>) 
                }
            </form>
        </div>
    )
}

export default AdminAddCourse