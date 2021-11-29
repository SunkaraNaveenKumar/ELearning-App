import React from "react";
import { Link } from "react-router-dom";
const AdminLectures=(props)=>{
    return(
        <div>
            <Link to='/admin/lectures/addlecture'>Add Lecture</Link>|
            <Link to='/admin/lectures/alllectures'>All Lectures</Link>
        </div>
    )
}

export default AdminLectures