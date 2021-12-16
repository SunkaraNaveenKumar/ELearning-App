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
    },
    home:{
        minHeight:'90vh',
        backgroundImage:`url("/Home.jpg")`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        display:'flex',
        alignItems:'center'
    },
    home1:{
        display:"flex",
        alignItems:"center",
        justifyContent:'center'

    },
    homeText:{
        display:'flex',
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
       
    },
    welcomeText:{
        
    },
    quote:{
        color:'White'
    },
    rootAppbar: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      adminQuote:{
          color:'crimson'
      },
      Login:{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          minHeight:'90vh',
          border:'1px solid black',
      },
      LoginForm:{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
      },
      loginText:{
          color:'crimson'
      },
      account:{
        minHeight:'90vh',
        border:'1px solid black',
        backgroundColor:'aqua'
      },
      account1:{
        marginTop:'20px',
        padding:'20px',
       
      },
      account2:{
        border:'1px solid black',
        margin:'10px',
        backgroundColor:'orange',
        borderRadius:'30px'
      },
      editIcon:{
          display:'flex',
          justifyContent:'flex-end'
      },
      saveCancel:{
        display:'flex',
        justifyContent:'flex-end'
      },
      bottomNav:{
        border:'1px solid black',
        marginBottom:"10px"
      },
      list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
      students:{
        display:'flex',
        border:'1px solid black',
        minHeight:'90vh',
        padding:'20px'
      },
      students1:{
        display:'flex',
        border:'1px solid black',
        flexDirection:'column'
      },
      table: {
        minWidth: 700,
      },
      studentEditForm:{
          display:'flex',
          flexDirection:'column',
          padding:'20px'
      },
      studentRegister:{
          display:'flex',
          flexDirection:"column",
          justifyContent:'center',
          alignItems:'center'
      },
      mainStudentRegister:{
        display:'flex',
        border:'1px solid black',
        minHeight:'90vh',
        alignItems:'center',
        justifyContent:'center'
      },
      studentsImg:{
          borderRadius:"200px"
      },
      EnrollCourseComponent:{
          display:'flex',
          border:'1px solid black',
          minHeight:'90vh',
          flexDirection:'row',
          padding:'20px',
          backgroundColor:'grey'
      },
      enroll1:{
        display:'flex',
        border:'1px solid black',
      },
      unEnroll:{
          display:'flex',
          border:'1px solid black',
          minHeight:'90vh',
          justifyContent:'center',
          alignItems:'center'

      },
      unEnroll1:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      },
      unEnrollNote:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      },
      addCourse:{
        display:'flex',
        border:'1px solid black',
        minHeight:'90vh',
        padding:'10px',
        justifyContent:'center',
        alignItems:'center'
      },
      addCourse1:{
          display:'flex',
          justifyContent:'space-around',
        alignItems:'center'
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      align:{
          display:'flex',
          flexDirection:'row',
          
      },
      img1:{
          display:'flex',
          width:'500px'
          
      },
      student11:{
        display:'flex',
        flexDirection:'column',
        width:'20%',
        marginTop:'20px',
        padding:'10px',
      },
      studentReg:{
        borderRadius:'40px',
      },
      studentsList:{
        borderRadius:'40px'
      },
      student10:{
        border:'1px solid black',
        minHeight:'90vh',
      },
      root5:{
        display:'flex',
        flexDirection:'row',
        border:'1px solid black',
        minHeight:'90vh'
      },
      viewLecture1:{
        border:'1px solid black',
      },
      viewLecture2:{
        border:'1px solid black',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
      },
      note5:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      stucourse:{
        display:'flex',
        flexDirection:'column',
        width:'20%'
      },
      stucourse1:{
        margin:'10px',
        borderRadius:'40px'
      },
      root6:{
        border:'1px solid black',
        minHeight:'90vh'
      },
      Courses:{
        border:'1px solid black',
        minHeight:'90vh',
        padding:'20px',
      },
      courseTitle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'grey',
        borderRadius:'20px',
        minHeight:'60px'
      },
      course13:{
        backgroundColor:'aqua',
        minHeight:'90vh',
        borderRadius:'20px'
       
      },
      img14:{
        padding:'20px',
       width:'90%',
       borderRadius:'40px'
      }
  }));

  export default useStyles