const initialstate={
    registerError:'',
    loginError:'',
    edittoggle:false,
    studentError:'',
    studentsList:[],
    account:{},
    allCourses:[],
    courseEditToggle:false,
    courseLectures:[],
    editLecture:{}
}
const adminReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "ADMINREGISTER":{
            return {...state,registerError:action.payload}
        }
        case "ADMINLOGIN":{
            return {...state,loginError:action.payload}
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
            const flag=state.allCourses.every(ele=>{
                return ele._id!==action.payload._id
            })
            if(flag)
            {
                return {...state,allCourses:action.payload}
            }
            else
            {
                const list=state.allCourses.map(ele=>{
                    if(ele._id===action.payload._id)
                    {
                        return {...ele,...action.payload}
                    }
                    else
                    {
                        return {...ele}
                    }
                })
                return {...state,allCourses:list}
            }
        }
        case 'COURSEEDITTOGGLE':{
            return {...state,courseEditToggle:action.payload}
        }
        case "ADMINCOURSEDELETE":{
            const list=state.allCourses.filter(ele=>{
                return ele._id!==action.payload._id
            })
            return {...state,allCourses:list}
        }
        case "ADMINCOURSELECTURES":{
            const flag=state.courseLectures.every(ele=>{
                return ele._id!==action.payload._id
            })
            if(flag)
            {
                return {...state,courseLectures:action.payload}
            }
            else
            {
                const list=state.courseLectures.map(ele=>{
                    if(ele._id===action.payload._id)
                    {
                        return {...ele,...action.payload}
                    }
                    else
                    {
                        return {...ele}
                    }
                })
                return {...state,courseLectures:list}
            }
        }
        case "EDITLECTURE":{
            return {...state,editLecture:action.payload}
        }
        case "ADMINLECTUREDELETE":{
            const list=state.courseLectures.filter(lecture=>{
                return lecture._id!==action.payload._id
            })
            return {...state,courseLectures:list}
        }
        default:{
            return state
        }
    }
}
export default adminReducer