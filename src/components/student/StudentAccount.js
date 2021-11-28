import React from "react";
import { useSelector } from "react-redux";
const StudentAccount=(props)=>{
    const account=useSelector((state)=>{
        return state.studentData.studentAccount
    })
    return(
        <div>
            <h2>Name-{account.name}</h2>
            <h2>Email-{account.email}</h2>
        </div>
    )
}

export default StudentAccount