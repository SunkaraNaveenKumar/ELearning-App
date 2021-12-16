import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { editAdminAccount, setAdminEdit } from "../../actions/actionCreater";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from "../Styling";
import { Typography,Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
/////////////////////////////////////
const AdminAccount=(props)=>{
    const classes=useStyles()
    const dispatch=useDispatch()
    const accountData=useSelector((state)=>{
        return state.adminData.account
    })
    const edittoggle=useSelector((state)=>{
        return state.adminData.edittoggle
    })
    const [username,setUsername]=useState(accountData.username)
    const [email,setEmail]=useState(accountData.email)
    const [academyName,setAcademyName]=useState('')
    /////////////////////////
    useEffect(()=>{
        if(Object.keys(accountData).length>0)
        {
            setUsername(accountData.username)
        setEmail(accountData.email)
        setAcademyName(accountData.academy.name)
        }
        
      
    },[edittoggle,accountData])
    /////////////////////////
    const handleChange=(e)=>{
        const inputType=e.target.name 
        const inputValue=e.target.value 
        if(inputType==='username')
        {
            setUsername(inputValue)
        }
        if(inputType==='email')
        {
            setEmail(inputValue)
        }
        if(inputType==='academyName')
        {
            setAcademyName(inputValue)
            console.log(inputValue)
        }
       
    }
    ///////////////////////
    const handleSave=(e)=>{
        e.preventDefault()
        const formData={
            username,
            email,
            academy:{name:academyName}
        }
        dispatch(editAdminAccount(formData))
}
    return(
        <div className={classes.account}>
            <Grid container className={classes.account1} spacing={2}>
            {Object.keys(accountData).length>0 && (
                <>
                {edittoggle ? (
                    <>
                    <Typography variant='h4'>Edit</Typography>
                    <Grid item xs={6} className={classes.account2}>
                    <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     name='username'
                     label="username..." 
                     value={username}
                     onChange={handleChange}
                     variant="outlined" 
                     /> 
                    </Grid> <br />
                    <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     name='email'
                     label="Email..." 
                     value={email}
                     onChange={handleChange}
                     variant="outlined" 
                     />
                </Grid> <br />
                <Grid item xs={6}>
                    <TextField
                     id="outlined-basic" 
                     name='academyName'
                     label="academyName..." 
                     value={academyName}
                     onChange={handleChange}
                     variant="outlined" 
                     />
                </Grid> 
                <Grid item className={classes.saveCancel} >
                <Button variant='contained' color='primary' onClick={handleSave}>
                    <SaveIcon/>
                     save
                    </Button>
                <Button variant='contained' color='secondary'  onClick={()=>{dispatch(setAdminEdit(false))}}>
                    <ClearIcon/>
                     cancel
                     </Button>
                </Grid>
                </Grid>
                    </>
                ):(
                    <Grid item xs={6} className={classes.account2}>
                    <>
                        <Typography variant='h4' color='primary'><AccountCircleIcon fontSize="large"/>UserName-{accountData.username}</Typography>
                        <Typography variant='h6'><EmailIcon fontSize="large"/>Email-{accountData.email}</Typography>
                        <Typography variant='h6'><AssistantPhotoIcon fontSize='large'></AssistantPhotoIcon>Academy-{accountData.academy.name}</Typography>
                        <Grid item className={classes.editIcon}>
                        <IconButton  onClick={()=>{dispatch(setAdminEdit(true))}}>
                        <EditIcon color='primary' style={{fontSize:'40px'}}></EditIcon>
                        </IconButton>
                         </Grid>
                    </>
                    </Grid>
                )}
                </>
            )}
            </Grid>
        </div>
    )
}

export default AdminAccount