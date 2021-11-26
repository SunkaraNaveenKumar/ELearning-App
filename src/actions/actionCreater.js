import axios from 'axios'


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
                dispatch(setAdminToggle(true))
                dispatch(setAdminLogin(''))
                localStorage.setItem('token',data.token)
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
////////////////////////////  login toggle
export const setAdminToggle=(value)=>{
    return {
        type:'TOGGLE',
        payload:value
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
                alert('student registered successfully')
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
///////////////////////////////////////////////// student 
/////////////////////////////////////////////// student login
export const stateStudentLogin=(formData)=>{
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
                localStorage.setItem('token',data.token)
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