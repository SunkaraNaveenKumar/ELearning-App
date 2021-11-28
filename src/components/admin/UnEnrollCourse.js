import React,{useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { stateUnEnrollCourse } from "../../actions/actionCreater";

const UnEnrollCourse=(props)=>{
    const dispatch=useDispatch()
    const [studentId,setStudentId]=useState('')
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const studentsList=useSelector((state)=>{
        return state.adminData.studentsList
    })
    /////////////////////////
    const handleChange=(e)=>{
        setStudentId(e.target.value)
    }
    ////////////////////
    const handleUnEnroll=(id)=>{
        const data={
            courseId:id,
            studentId
        }
        console.log(data)
        dispatch(stateUnEnrollCourse(data))
    }
    return(
        <div>
            <table border='1'>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Student Enrolled</th>
                            <th>UnEnroll</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allCourses.map(course=>{
                        return (
                            <tr key={course._id}>
                                <td>{course.name}</td>
                                <td>
                                    {course.students.length>0?(
                                         <ul>
                                         {course.students.map(ele=>{
                                             return (
                                                 <li key={ele._id}>
                                                    {studentsList.length>0 && <>{studentsList.find(student=>{
                                                       return student._id===ele.student
                                                    }).email}</>} 
                                                    
                                                  <input type='radio' name={course.name} value={ele.student} checked={studentId===ele.student} onChange={handleChange}></input>   
                                                 </li>
                                             )
                                         })}
                                     </ul>
                                    ):(
                                        <>
                                        <p>No Students Enrolled to this Course</p>
                                        </>
                                    )}
                                </td>
                                <td>
                                {course.students.length>0 ?(
                                <button onClick={()=>handleUnEnroll(course._id)}>UnEnroll</button>
                                ):(
                                <p>No students to UnEnroll</p>
                                )}
                                </td>
                            </tr>
                    )})}
                    </tbody>
                </table>
          
        </div>
    )
}
export default UnEnrollCourse