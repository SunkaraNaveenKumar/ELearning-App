import React,{useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { setCourseEditToggle, stateAdminCourseDelete, stateAdminCourseInfo } from "../../actions/actionCreater";
import AdminAddCourse from "./AdminAddCourse";
const AdminAllCourses=(props)=>{
    const dispatch=useDispatch()
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const courseEditToggle=useSelector((state)=>{
        return state.adminData.courseEditToggle
    })
    const [course,setCourse]=useState({})
    ///////////////////////////////////////
    const handleEdit=(id)=>{
        const course=allCourses.find(ele=>{
            return ele._id===id
        })
        setCourse(course)
       dispatch(setCourseEditToggle(true))
    }
    return(
        <div>
            <ul>
            {allCourses.map(ele=>{
                return (
                <li key={ele._id}>
                    {ele.name} ,
                    {ele.author}
                    <button onClick={()=>{dispatch(stateAdminCourseInfo(ele._id))}}>View Details</button>   
                    <button onClick={()=>{
                        handleEdit(ele._id)
                    }}>Edit</button>
                    <button onClick={()=>{dispatch(stateAdminCourseDelete(ele._id))}}>Delete</button>
                </li>
            )})}
            </ul>
            {courseEditToggle && (
                <div>
                    <AdminAddCourse courseEditToggle={courseEditToggle} course={course}/>
                </div>
            )}
        </div>
    )
}
export default AdminAllCourses