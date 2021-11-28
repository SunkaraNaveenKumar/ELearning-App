import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { stateStudentEnrollCourse ,stateStudentUnEnrollCourse} from "../../actions/actionCreater";
const StudentAllCourses=(props)=>{
    const dispatch=useDispatch()
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const accountId=useSelector((state)=>{
        return state.studentData.studentAccount._id
    })
    ///////////////////////////////
    const callToggle=(course)=>{
        const bool=course.students.some(ele=>ele.student===accountId)
        return bool
    }
    return(
        <div>
            <ul>
            {allCourses.map(course=>{
                return (
                <li key={course._id}>
                    {course.name}
                    <button disabled={callToggle(course)} onClick={()=>{dispatch(stateStudentEnrollCourse(course._id))}}>
                        {callToggle(course) ?(
                            <>
                            Enrolled
                            </>
                        ):(
                            <>
                            Enroll
                            </> 
                        )}
                         </button>
                         {callToggle(course) &&<button onClick={()=>{dispatch(stateStudentUnEnrollCourse(course._id))}}>UnEnroll</button>}
                </li>
            )})}
            </ul>
        </div>
    )
}

export default StudentAllCourses