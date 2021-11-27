import React from "react";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { stateAdminAllCourses } from "../../actions/actionCreater";
const AdminCourses=(props)=>{
    const dispatch=useDispatch()
    return(
        <div>
            <hr />
            <Link to="/admin/addcourse">Create a Course</Link>|
            <Link to="/admin/allcourses" onClick={()=>{dispatch(stateAdminAllCourses())}}>ALL courses</Link>
        </div>
    )
}

export default AdminCourses