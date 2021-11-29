import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root11: {
      flexGrow: 1,
    },
    paper11: {
      height: 140,
      width: 100,
    },
    control11: {
      padding: theme.spacing(2),
    },
    root:{
        border:'2px solid black',
        marginTop:"20px",
        padding:"20px"
    },
    lecturesList:{
        border:'2px solid black',
        display:"flex",
        padding:"20px",
        flexDirection:"column"
    },
    editLecture:{
        border:'2px solid black',
    },
    lecture:{
        border:'1px solid black',
        padding:"5px",
        display:"flex",
        marginTop:"10px",
        alignItems:"center",
    },
    lectureBtns:{
        padding:'10px',
        display:"flex",
        justifyContent:'flex-end',
        alignItems:"center"
    },
    lectureTitle:{
        display:'flex',
        justifyContent:'center',
        alignItems:"center"
    },
    editNote:{
        border:'1px solid black',
        marginTop:'100px',
    },
    editForm:{
        border:'1px solid black',
        padding:"20px",
        display:'flex'
    },
    plusicon:{
        border:'1px solid black',
        marginTop:'20px',
        display:"flex",
        justifyContent:'center',
        alignItems:"center"
    }
  }));

  export default useStyles