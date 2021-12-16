import React,{useState} from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { Slide } from "@material-ui/core";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
///////////////////////////////
import useStyles from "../Styling";
////////////////////////////
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
////////////////////////////
const Home=(props)=>{
    const classes=useStyles()
    const  adminorstudent=useSelector((state)=>{
        return state.adminorstudent
    })
    ////////////////////////
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      //////////////////////    
    return(
        <div className={classes.home}>
        <Grid container className={classes.home1}>
            <Grid item className={classes.homeText}>
                {!adminorstudent.role?(
                    <>
                     <Typography variant="h3" className={classes.welcomeText}>
                         Welcome Folks!
                     </Typography> 
                <Typography variant="h6" className={classes.quote}>
                    --Darkness cannot drive out darkness,<br/>
                      only light can do it. <br/>
                      College cannot drive out unemployment,<br/>
                      only skills can do it.
                </Typography>
                <Button variant='contained' color='secondary' onClick={handleClickOpen}>
                   <Typography variant='h6'> Dream</Typography>
                    <VpnKeyIcon/>
                </Button>
                </>
                ):(
                    <>
                    {adminorstudent.role==='admin'?(
                        <>
                         <Typography variant="h3" className={classes.welcomeText}>Hi, {adminorstudent.username}!</Typography>
                         <Typography variant="h6" className={classes.adminQuote}>
                             --You Can Create Read Update and Destroy--
                         </Typography>
                        </>
                    ):(
                        <>
                         <Typography variant="h3" className={classes.welcomeText}>Hi, {adminorstudent.name}!</Typography>
                         <Typography variant="h6" className={classes.adminQuote}>
                             --Welcome to the new world of learning skills--
                         </Typography>
                        </>
                    )}
                    </>
                )}
            </Grid>
        </Grid>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Are You?"}</DialogTitle>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={()=>{
              handleClose()
              props.history.push('/admin/register')
              }}>Admin</Button>
          <Button variant='outlined' color='secondary' onClick={()=>{
              handleClose()
              props.history.push('/student/login')
              }}>Student</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default Home