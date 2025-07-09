import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


const Sidebar = () => {

  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen)
  //Early return 
  if(!isSidebarOpen) return null;

  return (
    <div className='w-42 shadow-lg p-5 text-lg h-[91vh]'>
      <ul>
        <Link to={"/"}><li className='p-1'>Home</li></Link>
        <li className='p-1'>Shorts</li>
        <li className='p-1'>Subscriptions</li>
        <li className='p-1'>Youtube Music</li>
      </ul>
      <div>
        <h1 className='font-bold pt-5'>You</h1>
        <ul>
          <li className='p-1'>History</li>
          <li className='p-1'>Playlist</li>
          <li className='p-1'>Your Videos</li>
          <li className='p-1'>Your Courses</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
          <li className='p-1'>Trending</li>
          <li className='p-1'>Shopping</li>
          <li className='p-1'>Music</li>
          <li className='p-1'>Movie</li>
          <li className='p-1'>Live</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
