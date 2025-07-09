
import { Outlet } from "react-router-dom"
import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"



const Body = () => {
  return (
    
      <div className="flex w-[99vw] pt-20">
        <Sidebar/>
        <Outlet/>
      </div>
  )
}

export default Body
