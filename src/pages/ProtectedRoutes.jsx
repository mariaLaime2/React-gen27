import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Navigate} from "react-router-dom"

const ProtectedRoutes=() =>{
    const trainer = useSelector(reducer=>reducer.trainer)
  if(trainer.lenght >= 3){
   return <Outlet/>
  }else {
    return <Navigate to="/"/>
  }
}

export default ProtectedRoutes