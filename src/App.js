import React from "react"
import {Link,Route} from 'react-router-dom'
import Home from "./Home"
const App=(props)=>{
    return(
         <div>
             <Link to='/'>Home</Link>|
             <Link to='/student'>Student</Link>|
             <Link to='/admin'>Admin</Link>|

             <Route path='/' component={Home} exaxt={true}></Route>
         </div>
    )
}
export default App