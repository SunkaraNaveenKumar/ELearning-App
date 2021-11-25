const initialstate={
    registerError:'',
    loginError:'',
    toggle:false,
    edittoggle:false,
    account:{}
}
const adminReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "ADMINREGISTER":{
            return {...state,registerError:action.payload}
        }
        case "ADMINLOGIN":{
            return {...state,loginError:action.payload}
        }
        case 'TOGGLE':{
            return {...state,toggle:action.payload}
        }
        case "ADMINACCOUNT":{
            return {...state,account:action.payload}
        }
        case 'EDITTOGGLE':{
            return {...state,edittoggle:action.payload}
        }
        default:{
            return state
        }
    }
}
export default adminReducer