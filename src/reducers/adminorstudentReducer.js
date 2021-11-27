const initialstate={}

const adminorstudentReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "ADMINORSTUDENT":{
            return action.payload
        }
        default:{
            return state
        }
    }
}
export default adminorstudentReducer