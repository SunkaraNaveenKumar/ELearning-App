import React from "react";
import { useSelector } from "react-redux";
const StudentMyCourses=(props)=>{
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