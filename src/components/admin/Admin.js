import React from "react";
import {Link} from "react-router-dom"

const Admin=(props)=>{
    return(
        <div>
            <hr/>
            <Link to='/admin/register'>AdminRegister</Link>|
            <Link to='/admin/login'>AdminLogin</Link>    
            
            
        </div>
    )
}

export default Admin