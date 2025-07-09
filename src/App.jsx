import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideoContainer from './components/VideoContainer'
import WatchPage from './components/WatchPage'


function App() {
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      { 
      path : "/",
      element : <VideoContainer/>
      },
      {
      path : "/watch",
      element: <WatchPage/>
      }
    ]
  }
])
  return (
    <Provider store={store} >
      <div className='scrollbar-hide w-[99vw] h-[100vh]'>
        <Head/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
    
  )
}

export default App
