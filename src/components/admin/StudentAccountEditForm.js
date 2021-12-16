import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from "../Styling";
import { Typography,Button } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
const StudentAccountEditForm=(props)=>{
    const {name,email,isAllowed,handleChange,handleCancel,handleSave}=props
    const classes=useStyles();
    return(
        <Grid container className={classes.studentEditForm} spacing={3}>
            <Typography variant='h5' color='primary'>Edit</Typography>
         <Grid item >
                    
                    <TextField
                     id="outlined-basic" 
                     name='name'
                     label="name..." 
                     value={name}
                     onChange={handleChange}
                     variant="outlined" 
                     />
                </Grid>
                <Grid item >
                    <TextField
                     id="outlined-basic" 
                     name='email'
                     label="Email..." 
                     value={email}
                     onChange={handleChange}
                     variant="outlined" 
                     />
                </Grid>
                <Grid item >
                    <Checkbox
                    color="primary"
                    name='isAllowed' 
                    checked={isAllowed} 
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                /> Allow
                <Grid item>
                    <Button variant='contained' color='primary'  onClick={handleSave}>Save</Button>
                    <Button variant='contained' color='secondary'  onClick={handleCancel}>Cancel</Button>
                </Grid>
                </Grid>
        </Grid>
        
    )
}
export default StudentAccountEditForm