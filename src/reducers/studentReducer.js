const initialstate={
    studentLoginError:"",
    studentAccount:{}
}

const studentReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case 'STUDENTLOGINERROR':{
            return {...state,studentLoginError:action.payload}
        }
        case 'STUDENTACCOUNT':{
            return {...state,studentAccount:action.payload}
        }
        default:{
            return state
        }
    }
}

export default studentReducer