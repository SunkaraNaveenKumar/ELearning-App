import React,{useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { stateUnEnrollCourse } from "../../actions/actionCreater";

const UnEnrollCourse=(props)=>{
    const dispatch=useDispatch()
    const [valueId,setValueId]=useState('')// unique radio button
    const [studentId,setStudentId]=useState('')
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const studentsList=useSelector((state)=>{
        return state.adminData.studentsList
    })
    /////////////////////////
    const handleChange=(e,ele)=>{
        setValueId(e.target.value)
        setStudentId(ele.student)
    }
    //////////////////////
    const handleUnEnroll=(id)=>{
        const data={
            courseId:id,
            studentId
        }
        setStudentId('')
        dispatch(stateUnEnrollCourse(data))
    }
    /////////////////////////
    const callBack=(ele)=>{
        const findStudent=studentsList.find(stu=>{
            return stu._id===ele.student
         })
         return findStudent
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
                                                    {studentsList.length>0 && <>{callBack(ele).email}</>} 
                                                    
                                                  <input
                                                   type='radio' 
                                                   name={course.name} 
                                                   value={ele._id} 
                                                   checked={valueId===ele._id} 
                                                   onChange={(e)=>handleChange(e,ele)}
                                                   ></input>   
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