import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import { stateAdminCourseInfo } from "../../actions/actionCreater";
const AdminAllCourses=(props)=>{
    const dispatch=useDispatch()
    const allCourses=useSelector((state)=>{
        return state.adminError.allCourses
    })
    return(
        <div>
            <ul>
            {allCourses.map(ele=>{
                return (
                <li key={ele._id}>
                    {ele.name} 
                    <button onClick={()=>{dispatch(stateAdminCourseInfo(ele._id))}}>View Details</button>   
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
            )})}
            </ul>
        </div>
    )
}
export default AdminAllCourses