import React from "react";
const StudentAccountEditForm=(props)=>{
    const {name,email,isAllowed,handleChange,handleCancel,handleSave}=props
    return(
        <form>
                <input type='text' name='name'  value={name}  onChange={handleChange}></input> <br/>
                <input type='text' name='email' value={email} onChange={handleChange}></input> <br />
                <input type='checkbox' name='isAllowed' checked={isAllowed} onChange={handleChange}></input><br />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}
export default StudentAccountEditForm