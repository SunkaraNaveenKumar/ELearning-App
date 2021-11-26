import React from "react";
import {Link} from 'react-router-dom'
const AdminStudents=(props)=>{
    return(
        <div>
            <Link to='/admin/students/list'>StudentsList</Link>|
            <Link to='/admin/students/register'>Register Student</Link>
        </div>
    )
}
export default AdminStudents