import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { stateAdminCourseLectures } from "../../actions/actionCreater";
///////////////////////// Material Components
import { Typography } from "@material-ui/core";
const StudentViewLectures=(props)=>{
    const id=props.match.params.id
    const dispatch=useDispatch()
    const courseLectures=useSelector((state)=>{
        return state.adminData.courseLectures
    })
    ///////////////////
    useEffect(()=>{
        dispatch(stateAdminCourseLectures(id))
    },[dispatch,id])
    return(
        <div>
            {courseLectures.length>0 ?(
                <>
                 <ul>
                {courseLectures.map(lecture=>{
                    return (
                    <li key={lecture._id}>
                        <a href={lecture.assetURL} target="_blank" rel="noreferrer" >{lecture.title}</a>
                    </li>
                    )
                })}
            </ul>
                </>
            ):(
                <>
                <Typography variant="h4" >No Lectures to watch</Typography>
                </>
            )}
        </div>
    )
}

export default StudentViewLectures