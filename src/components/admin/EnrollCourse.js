import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { stateEnrollCourse } from "../../actions/actionCreater";
const EnrollCourse=(props)=>{
    const dispatch=useDispatch()
    const studentsList=useSelector((state)=>{
        return state.adminData.studentsList
    })
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const [studentId,setStudentId]=useState('')
    const [courseId,setCourseId]=useState('')
    const handleChange=(e)=>{
        if(e.target.name==='student')
        {
            setStudentId(e.target.value)
        }
        if(e.target.name==='course')
        {
            setCourseId(e.target.value)
        }
    }
    ///////////////////////////
    const handleEnroll=(e)=>{
        const data={
            studentId,
            courseId
        }
        dispatch(stateEnrollCourse(data))
        setCourseId('')
        setStudentId('')
    }
    return(
        <div>
            <hr/>
            <h2>Select Student</h2>
            <ul>
            {studentsList.map(ele=>{
                return (
                    <li key={ele._id}>
                        <input type="radio" name='student' value={ele._id} onChange={handleChange} checked={studentId===ele._id}></input>
                        {ele.name},
                        {ele.email}.
                    </li>
                  )
            })}
           </ul>
           <hr/>
           <h2>Select Course</h2>
           <ul>
            {allCourses.map(ele=>{
                return (
                <li key={ele._id}>
                     <input type="radio" name='course' value={ele._id} onChange={handleChange} checked={courseId===ele._id}></input>
                    {ele.name} ,
                    {ele.author}.
                </li>
            )})}
            </ul>
            <button onClick={handleEnroll}>Enroll</button>
        </div>
    )
}

export default EnrollCourse