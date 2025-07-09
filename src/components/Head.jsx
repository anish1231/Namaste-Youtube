import { useDispatch } from "react-redux"
import { toggleSideBar } from "../utils/appSlice"


const Head = () => {
  const dispatch = useDispatch()
  const toggleSidebar = () => {
    
    dispatch(toggleSideBar())
  }

  return ( 
    <div className="grid grid-flow-col grid-cols-12 px-3 py-2 shadow-lg fixed bg-white w-full opacity-99">
      <div className="col-span-2 flex h-10 mt-2 items-center">
        <div className="rounded-full bg-white hover:bg-gray-200 h-8 w-8 ml-2">
          <img src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png" alt="menuIcon" onClick={() =>toggleSidebar()} className="cursor-pointer"/>
        </div>
        <img className="ml-8 h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="YTLogo" />
      </div>
      <div className="col-span-9 flex text-center justify-center">
        <input type="text" placeholder="Search" className="w-1/2 border border-gray-600 p-2 rounded-l-full bg-white" />
        <button className="border border-gray-600 text-center bg-gray-100 px-5 py-2 rounded-r-full cursor-pointer">🔍</button>
      </div>
      <div className="col-span-1 h-8 mt-1">
        <img className="h-8" src="https://cdn-icons-png.flaticon.com/512/266/266033.png" alt="Avatar" />
      </div>
    </div>
  )
}

export default Head
