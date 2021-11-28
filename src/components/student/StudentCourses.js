import React from "react";
import { Link } from "react-router-dom";
const StudentCourses=(props)=>{
    return (
        <div>
            <Link to='/student/allcourses'>AllCourses</Link>
            <Link to='/students/mycourses'>My Courses</Link>
        </div>
    )
}

export default StudentCourses