import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { setEditLecture, stateAdminAddLecture, stateAdminLectureEdit } from "../../actions/actionCreater";

const AdminAddLecture=(props)=>{
    const {id}=props
   const editLecture=useSelector((state)=>{
     return state.adminData.editLecture
   })
    const dispatch=useDispatch()
    const allCourses=useSelector((state)=>{
        return state.adminData.allCourses
    })
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [assetType,setAssetType]=useState('')
    const [assetURL,setAssetURL]=useState('')
    const [isDelete,setIsDelete]=useState('')
    const [courseId,setCourseId]=useState('')
    ////////////////////////////
    useEffect(()=>{
        if(Object.keys(editLecture).length>0)
        {
            setTitle(editLecture.title)
        setDescription(editLecture.description)
        setAssetType(editLecture.assetType)
        setAssetURL(editLecture.assetURL)
        setIsDelete(editLecture.isDelete)
        }
    },[editLecture])
    //////////////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name
        const inputValue=e.target.value
        if(inputType==='title')
        {
            setTitle(inputValue)
        }
        if(inputType==='description')
        {
            setDescription(inputValue)
        }
        if(inputType==='assetType')
        {
            setAssetType(inputValue)
        }
        if(inputType==='assetURL')
        {
            setAssetURL(inputValue)
        }
        if(inputType==='isDelete')
        {
            setIsDelete(inputValue)
        }
    }
    ///////////////////////
    const handleId=(id)=>{
        setCourseId(id)
    }
    ///////////////////////////
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title,
            description,
            assetType,
            assetURL,
            isDelete
          }
        if(Object.keys(editLecture).length>0)
        {
            dispatch(stateAdminLectureEdit(formData,id,editLecture._id))
            dispatch(setEditLecture({}))
        }
        else
        {
            dispatch(stateAdminAddLecture(formData,courseId))
        } 
        setTitle('')
        setDescription('')
        setAssetURL('')
        setAssetType('')
        setIsDelete('')
        setCourseId('')
    }
    //////////////////////////////////////
    return(
        <div>
              {Object.keys(editLecture).length>0 ?(
                    <>
                    <h2>Edit a Lecture</h2>
                    </>
                ):(
                    <>
                     <h1>Select Any One of the Course to which Lecture should be added</h1>
                     <ul>
                         {allCourses.map(course=>{
                             return (
                             <li key={course._id}>
                                 {course.name},
                                 {course.category}
                                 <input
                                 type='radio' 
                                 name='selectCourse' 
                                 value={course._id}
                                 onChange={()=>{handleId(course._id)}} 
                                 checked={courseId===course._id}
                                 ></input>
                                 </li>
                                  )
                                  })}
                    </ul>
                    <h2>Add a Lecture</h2>
                    </>
                )}
            <form >
            <input type='text' name='title' value={title} onChange={handleChange} placeholder='Enter Title....' ></input><br/>
            <input type='text' name='description' value={description} onChange={handleChange} placeholder='Enter description....' ></input><br/>
            <select name="assetType" value={assetType} onChange={handleChange}>
                    <option value=''>select</option>
                    <option value='video'>video</option>
                    <option value='audio'>audio</option>
                    <option value='text'>text</option>
                    <option value='pdf'>pdf</option>
                    <option value='img'>img</option>
                </select> <br/>
            <input type='text' name='assetURL' value={assetURL} onChange={handleChange} placeholder='URL....' ></input><br/>
            <label htmlFor="isDelete">is Delete ?</label> <br />
            <input
             type='radio' 
             name='isDelete' 
             id='isDelete' 
             value="true"
             checked={isDelete==="true"} 
             onChange={handleChange}
             ></input>true 
            <input
             type='radio' 
             name='isDelete' 
             id='isDelete' 
             value="false" 
             checked={isDelete==="false"}
             onChange={handleChange}
             ></input>false <br/>
            {Object.keys(editLecture).length>0 ?(
                <>
                <button onClick={handleSubmit}>Save</button>
                <button onClick={()=>{dispatch(setEditLecture({}))}}>Cancel</button>
                </>
            ):(
                <button onClick={handleSubmit}>Add</button>
            )}
            </form>
        </div>
    )
}

export default AdminAddLecture