import axios from 'axios'
import jwt_decode from "jwt-decode";
import swal from 'sweetalert';

/////////////////////////// admin register
export const asyncAdminRegister=(formData,props)=>{
    return (dispatch)=>{
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/register',formData)
        .then((Response)=>{
           if(Response.data.hasOwnProperty('errors'))
           {
             dispatch(setAdminRegister(Response.data.errors))
           }
           else
           {
               props.history.push('/admin/login')
               dispatch(setAdminRegister(""))
               alert('Registered Successfully')
           }
        })
        .catch((err)=>{
            dispatch(setAdminRegister(""))
            alert('try with different email or academy name')
        })
    }
}
const setAdminRegister=(error)=>{
    return {
        type:'ADMINREGISTER',
        payload:error
    }
}
//////////////////////////admin login
export const stateAdminLogin=(formData,props)=>{
    return (dispatch)=>{
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/login',formData)
        .then((Response)=>{
            const data=Response.data
            if(data.hasOwnProperty('errors'))
            {
                dispatch(setAdminLogin(data.errors))
            }
            else
            {
                props.history.push('/')
                dispatch(setAdminLogin(''))
                localStorage.setItem('token',data.token)
                const token = localStorage.getItem('token');
                const decoded = jwt_decode(token);
                dispatch(setAdminorStudent(decoded))
            }
        })
    }
}
const setAdminLogin=(error)=>{
    return{
        type:"ADMINLOGIN",
        payload:error
    }
}
/////////////////////////////////// admin account
export const stateAdminAccount=()=>{
    return (dispatch)=>{
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/account',{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            dispatch(setAdminAccount(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const setAdminAccount=(data)=>{
    return{
        type:'ADMINACCOUNT',
        payload:data
    }
}
/////////////////////////////////// edit admin account
export const editAdminAccount=(formData)=>{
return (dispatch)=>{
    axios.put('https://dct-e-learning.herokuapp.com/api/admin',formData,{
        headers:{
            Authorization:localStorage.getItem('token')
        }
    })
    .then((Response)=>{
        const data=Response.data
        dispatch(setAdminAccount(data))
        dispatch(setAdminEdit(false))
    })
    .catch((err)=>{
        alert(err.message)
    })
}
}
////////////////////// admin account edit toggle
export const setAdminEdit=(value)=>{
    return {
        type:"EDITTOGGLE",
        payload:value
    }
}
////////////////////////// admins student register

export const stateStudentRegister=(formData)=>{
    return (dispatch)=>{
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/students',formData,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            if(data.hasOwnProperty('errors'))
            {
                dispatch(setStudentRegister(data))
            }
            else
            {
                dispatch(setStudentRegister(''))
                dispatch(setStudentList(data))
                swal("Good Job!", "you Successfully registered a student", "success");
            }
           
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const setStudentRegister=(error)=>{
    return{
        type:"STUDENTREGISTER",
        payload:error
    }
}
const setStudentList=(data)=>{
    return{
        type:"REGISTERSTUDENTLIST",
        payload:data
    }
}
///////////////////////////////////// students List
export const stataStudentsList=()=>{
    return (dispatch)=>{
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/students',{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data 
            dispatch(setStudentsList(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const setStudentsList=(data)=>{
    return{
        type:"STUDENTSLIST",
        payload:data
    }
}
////////////////////////////////admin student info
export const stateStudentInfo=(id)=>{
    return (dispatch)=>{
        axios.get(`https://dct-e-learning.herokuapp.com/api/students/${id}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            alert(`
            id        -${data._id}
            Name      -${data.name}
            Email     -${data.email}
            Role      -${data.role}
            isAllowed -${data.isAllowed}
            `)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
//////////////////////////////////////// admin edit student account
export const stateStudentAccountEdit=(formData,id)=>{
    return (dispatch)=>{
        axios.put(`https://dct-e-learning.herokuapp.com/api/students/${id}`,formData,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            dispatch(setStudentAccountEdit(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const setStudentAccountEdit=(data)=>{
    return{
        type:'STUDENTACCOUNTEDIT',
        payload:data
    }
}
/////////////////////////////// admin delete student
export const stateStudentDelete=(id)=>{
    return (dispatch)=>{
        axios.delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${id}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            dispatch(setStudentDelete(data))
            swal("Success!", "you Successfully deleted a student", "success");
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const setStudentDelete=(data)=>{
    return{
        type:'STUDENTDELETE',
        payload:data
    }
}
////////////////////////////////////// admin add course
export const stateAdminAddCourse=(formData)=>{
    return (dispatch)=>{
        axios.post('https://dct-e-learning.herokuapp.com/api/courses',formData,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            if(data.hasOwnProperty('errors'))
            {
                alert('Invalid Inputs Try with different inputs!')
            }
            else
            {
                swal("Good Job!", "you Successfully created a course", "success");
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
///////////////////////////////////////////// admin all courses

export const stateAdminAllCourses=()=>{
    return(dispatch)=>{
        axios.get('https://dct-e-learning.herokuapp.com/api/courses',{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            dispatch(setAdminAllCourses(data))
        })
    }
}
const setAdminAllCourses=(data)=>{
    return{
        type:"ADMINALLCOURSES",
        payload:data
    }
}
////////////////////////////////////////// get course info
export const stateAdminCourseInfo=(id)=>{
    return (dispatch)=>{
        axios.get(`https://dct-e-learning.herokuapp.com/api/courses/${id}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            alert(`
            Course-${data.name}
            Duration-${data.duration} months
            Category-${data.category}
            Validity-${data.validity} years
            Level-${data.level}
            students enrolled-${data.students.length}
            Author-${data.author}
            createdAt-${data.createdAt}
            updatedAt-${data.updatedAt}
            `)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
/////////////////////////////////// admin course edit
export const stateAdminCourseEdit=(formData,id)=>{
    return(dispatch)=>{
        axios.put(`https://dct-e-learning.herokuapp.com/api/courses/${id}`,formData,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data 
            if(data.hasOwnProperty('errors'))
            {
                alert('Try Again With Different Inputs!')
            }
            else
            {
                dispatch(setAdminAllCourses(data))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
/////////////////////////////////////////////admin course edit toggle
export const setCourseEditToggle=(value)=>{
    return {
        type:'COURSEEDITTOGGLE',
        payload:value
    }
}
///////////////////////////////////////////// admin delete course
export const stateAdminCourseDelete=(id)=>{
    return (dispatch)=>{
        axios.delete(`https://dct-e-learning.herokuapp.com/api/courses/${id}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response)=>{
            const data=Response.data
            dispatch(setAdminCourseDelete(data))
            swal("Deleted!", "you Successfully deleted a course", "success");
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const setAdminCourseDelete=(data)=>{
    return{
        type:"ADMINCOURSEDELETE",
        payload:data
    }
}
///////////////////////////////////// admin enroll student to the course
export const stateEnrollCourse=(data)=>{
    return (dispatch)=>{
        axios.patch(`http://dct-e-learning.herokuapp.com/api/courses/enroll?courseId=${data.courseId}&studentId=${data.studentId}`,{},{
            headers:{
                Authorization:localStorage.getItem('token'),
            }
        })
        .then((Response)=>{
            const data=Response.data
            if(typeof(data)==='string')
            {
                alert('already enrolled')
            }
            else
            {
                if(data.hasOwnProperty('_id'))
                {
                    swal("Enrolled!", "Successfully Enrolled a student to the course", "success");
                    dispatch(setAdminAllCourses(data))
                }
                else
                {
                    alert('Invalid Inputs')
                }
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
////////////////////////////////// admin unenroll course
export const stateUnEnrollCourse=(data)=>{
    return (dispatch)=>{
        axios.patch(`http://dct-e-learning.herokuapp.com/api/courses/unenroll?courseId=${data.courseId}&studentId=${data.studentId}`,{},{
            headers:{
                Authorization:localStorage.getItem('token'), 
            }
        })
        .then((Response)=>{
            const data=Response.data
            if(data.hasOwnProperty('_id'))
                {
                    swal("UnEnrolled!", "you Successfully UnEnrolled a student from the course", "success");
                    dispatch(setAdminAllCourses(data))
                }
                else
                {
                    alert('Invalid Inputs')
                }
               
        })
        .catch((err)=>{
            alert(err.meassage)
        })
}
}
///////////////////////////////////// admin add lecture
export const stateAdminAddLecture=(formData,id)=>{
    return(dispatch)=>{
        axios.post(`https://dct-e-learning.herokuapp.com/api/courses/${id}/lectures`,formData,{
            headers:{
                Authorization:localStorage.getItem('token'), 
            }
        })
        .then((Response)=>{
            const data=Response.data 
            if(data.hasOwnProperty('errors'))
            {
                alert('invalid inputs')
            }
            else
            {
                swal("Good Job!", "you Successfully added a lecture", "success");
            }
        })
    }
}
/////////////////////////////// admin all lectures
export const stateAdminCourseLectures=(id)=>{
    return (dispatch)=>{
        axios.get(`https://dct-e-learning.herokuapp.com/api/courses/${id}/lectures`,{
            headers:{
                Authorization:localStorage.getItem('token'), 
            }
        })
        .then((Response)=>{
            const data=Response.data 
            dispatch(setAdminCourseLectures(data))
        })
    }
}
const setAdminCourseLectures=(data)=>{
    return{
        type:"ADMINCOURSELECTURES",
        payload:data
    }
}
//////////////////////////////////////////////// Admin Lecture View
export const stateAdminLectureView=(courseId,lectureId)=>{
    return(dispatch)=>{
        axios.get(`https://dct-e-learning.herokuapp.com/api/courses/${courseId}/lectures/${lectureId}`,{
            headers:{
                Authorization:localStorage.getItem('token'), 
            }
        })
        .then((Response)=>{
            const data=Response.data
            alert(`
            'Title':${data.title}
            "description":${data.description}
            "assetType":${data.assetType}
            "assetURL":${data.assetURL}
            "isDelete":${data.isDelete}
            "createdAt":${data.createdAt}
            "updatedAt":${data.updatedAt}
            `)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
///////////////////////////////////////////// set edit lecture
export const setEditLecture=(data)=>{
    return{
        type:"EDITLECTURE",
        payload:data
    }
}
//////////////////////////////////////// state edit lecture
export const stateAdminLectureEdit=(formData,courseId,lectureId)=>{
    return (dispatch)=>{
        axios.put(`https://dct-e-learning.herokuapp.com/api/courses/${courseId}/lectures/${lectureId}`,formData,{
            headers:{
                Authorization:localStorage.getItem('token'), 
            }
        })
        .then((Response)=>{
            const data=Response.data 
            dispatch(setAdminCourseLectures(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
//////////////////////////////////////////////delete admin lecture
export const stateAdminLectureDelete=(courseId,lectureId)=>{
    return(dispatch)=>{
        axios.delete(`https://dct-e-learning.herokuapp.com/api/courses/${courseId}/lectures/${lectureId}`,{
            headers:{
                Authorization:localStorage.getItem('token'), 
            }
        })
        .then((Response)=>{
            const data=Response.data 
            dispatch(setAdminLectureDelete(data))
            swal("Deleted!", "you Successfully deleted a lecture from the course", "success");
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

}
const setAdminLectureDelete=(data)=>{
    return{
        type:"ADMINLECTUREDELETE",
        payload:data
    }
}
///////////////////////////////////////////////// student 
/////////////////////////////////////////////// student login
export const stateStudentLogin=(formData,props)=>{
    return (dispatch)=>{
        axios.post('https://dct-e-learning.herokuapp.com/api/students/login',formData)
        .then((Response)=>{
            const data=Response.data
            if(data.hasOwnProperty('errors'))
            {
                dispatch(setStudentLoginError(data.errors))
            }
            else
            {
                dispatch(setStudentLoginError(''))
                props.history.push('/')
                localStorage.setItem('token',data.token)
                const token = localStorage.getItem('token');
                const decoded = jwt_decode(token);
                dispatch(setAdminorStudent(decoded))
                dispatch(stateStudentAccount())
            }
        })
    }
}
const setStudentLoginError=(error)=>{
    return{
        type:"STUDENTLOGINERROR",
        payload:error
    }
}
///////////////////////////////////// debug student account
export const stateStudentAccount=()=>{
    return(dispatch)=>{
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        dispatch(setStudentAccount(decoded))
    }
}
const setStudentAccount=(account)=>{
    return{
        type:'STUDENTACCOUNT',
        payload:account
    }
}
///////////////////////////////////// student enroll 
export const stateStudentEnrollCourse=(courseId)=>{
    return (dispatch)=>{
        axios.patch(`https://dct-e-learning.herokuapp.com/api/courses/enroll?courseId=${courseId}`,{},{
            headers:{
                Authorization:localStorage.getItem('token'), 
            }
        })
        .then((Response)=>{
            const data=Response.data
              if(data.hasOwnProperty('_id'))
                {
                    swal("Good Job!", "you Successfully enrolled to a course ", "success");
                    dispatch(setAdminAllCourses(data))
                }
                else
                {
                    alert('Invalid Inputs')
                }
            
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

}
////////////////////////////////// student uneroll course
export const stateStudentUnEnrollCourse=(courseId)=>{
    return (dispatch)=>{
        axios.patch(`https://dct-e-learning.herokuapp.com/api/courses/unenroll?courseId=${courseId}`,{},{
            headers:{
                Authorization:localStorage.getItem('token'), 
            }
        })
        .then((Response)=>{
            const data=Response.data 
            swal("UnEnrolled!", "you Successfully UnEnrolled to a course", "success");
            dispatch(setAdminAllCourses(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
///////////////////////////////////////////// admin or student
export const setAdminorStudent=(data)=>{
    return {
        type:"ADMINORSTUDENT",
        payload:data
    }
}
////////////////////////////