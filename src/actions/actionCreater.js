import axios from 'axios'



export const asyncAdminRegister=(formData)=>{
    return (dispatch)=>{
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/register',formData)
        .then((Response)=>{
           if(Response.data.hasOwnProperty('errors'))
           {
             dispatch(setAdminRegister(Response.data.error))
           }
           else
           {
               dispatch(setAdminRegister(""))
           }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const setAdminRegister=(error)=>{
    return {
        type:'ADMINREGISTER',
        payload:error
    }
}
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
export const setAdminToggle=(value)=>{
    return {
        type:'TOGGLE',
        payload:value
    }
}

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
export const setAdminEdit=(value)=>{
    return {
        type:"EDITTOGGLE",
        payload:value
    }
}