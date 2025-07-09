import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "../constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"


const VideoContainer = () => {
  const [videos, setVideos] = useState(null)
  useEffect(() => {
    getVideos()
  },[])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items)
  }
  if(!videos) return null;
  return (
    <div className="flex flex-wrap overflow-auto ">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video}/>
        </Link>
      )
      )}
      
    </div>
  )
}

export default VideoContainer
