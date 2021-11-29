import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { stateAdminCourseLectures } from "../../actions/actionCreater";
const AdminAllLectures=(props)=>{
    const dispatch=useDispatch()
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    ///////////////////////
    return(
        <div>
            <ul>
            {allCourses.map(course=>{
                return (
                    <li key={course._id}>
                        {course.name},{course.category}
                        <button onClick={()=>{
                            props.history.push(`/admin/lectures/alllectures/${course._id}`)
                            dispatch(stateAdminCourseLectures(course._id))
                            }}>View Lectures</button>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default AdminAllLectures