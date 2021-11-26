const initialstate={
    studentLoginError:""
}

const studentReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case 'STUDENTLOGINERROR':{
            return {...state,studentLoginError:action.payload}
        }
        default:{
            return state
        }
    }
}

export default studentReducer