import React from "react";
import { Link } from "react-router-dom";
import { stateAdminAllCourses } from "../../actions/actionCreater";
import { useDispatch } from "react-redux";
const AdminDashboard=(props)=>{
    const dispatch=useDispatch()
    return (
        <div>
            <Link to='/admin/enroll/course' onClick={()=>{dispatch(stateAdminAllCourses())}}>Enroll Course</Link>|
            <Link to='/admin/unenroll/course' onClick={()=>{dispatch(stateAdminAllCourses())}}>UnEnroll Course</Link>
        </div>
    )
}

export default AdminDashboard