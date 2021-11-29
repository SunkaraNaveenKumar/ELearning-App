import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { stateAdminCourseLectures } from "../../actions/actionCreater";
const StudentMyCourses=(props)=>{
    const dispatch=useDispatch()
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const accountId=useSelector((state)=>{
        return state.studentData.studentAccount._id
    })
    const callToggle=(course)=>{
        const bool=course.students.some(ele=>ele.student===accountId)
        return bool
    }
    return(
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Duration</th>
                        <th>Validity</th>
                        <th>Category</th>
                        <th>Level</th>
                        <th>Author</th>
                        <th>No of Students Taken This Course</th>
                        <th>Lectures</th>
                    </tr>
                </thead>
                <tbody>
                    {allCourses.map(course=>{
                        return (
                            <tr key={course._id}>
                                {callToggle(course) && (
                                    <>
                                     <td>{course.name}</td>
                                     <td>{course.duration} months</td>
                                     <td>{course.validity} years</td>
                                     <td>{course.category}</td>
                                     <td>{course.level}</td>
                                     <td>{course.author}</td>
                                     <td>{course.students.length}</td>
                                     <td><button onClick={()=>{
                                         dispatch(stateAdminCourseLectures(course._id))
                                         props.history.push(`/student/mycourses/lectures/${course._id}`)
                                     }}>View Lectures</button></td>
                                    </>
                                )}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentMyCourses