const initialstate={
    registerError:'',
    loginError:'',
    toggle:false,
    edittoggle:false,
    studentError:'',
    studentsList:[],
    account:{},
    allCourses:[]
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
        case 'STUDENTREGISTER':{
            return {...state,studentError:action.payload.errors}
        }
        case "REGISTERSTUDENTLIST":{
            return {...state,studentsList:[...state.studentsList,action.payload]}
        }
        case 'STUDENTSLIST':{
            return {...state,studentsList:action.payload}
        }
        case 'STUDENTACCOUNTEDIT':{
            const list=state.studentsList.map(ele=>{
                if(ele._id===action.payload._id)
                {
                    return {...ele,...action.payload}
                }
                else
                {
                    return {...ele}
                }
            })
            return {...state,studentsList:list}
        }
        case "STUDENTDELETE":{
            const list=state.studentsList.filter(ele=>{
                return ele._id!==action.payload._id
            })
            return {...state,studentsList:list}
        }
        case 'ADMINALLCOURSES':{
            return {...state,allCourses:action.payload}
        }
        default:{
            return state
        }
    }
}
export default adminReducer