import React from "react";
import { Link } from "react-router-dom";
import { stateAdminAllCourses } from "../../actions/actionCreater";
import { useDispatch } from "react-redux";
const StudentCourses=(props)=>{
    const dispatch=useDispatch()
    return (
        <div>
            <Link to='/student/allcourses' onClick={()=>{dispatch(stateAdminAllCourses())}}>All Courses</Link>|
            <Link to='/student/mycourses'>My Courses</Link>
        </div>
    )
}

export default StudentCourses