import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_INFO } from "../constants";


const VideoCard = ({info}) => {
    const [channelLogo,setChannelLogo] = useState(null)
    const {snippet, statistics} = info;
    const {thumbnails, title, channelTitle, publishedAt, channelId} = snippet;
    const formatViewCount = (num) => {
        if (!num) return "";
        const count = parseInt(num, 10);
        if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + "M";
        if (count >= 1_000) return (count / 1_000).toFixed(1) + "K";
        return count.toString();
    };
    useEffect(() => {
        getChannelInfo()
    },[])
    const getChannelInfo = async () => {
        const sUrl = YOUTUBE_CHANNEL_INFO + channelId
        const data = await fetch(sUrl)
        const json = await data.json();
        setChannelLogo(json?.items[0]?.snippet?.thumbnails?.default?.url)
    }
    
  return (
    <div className="m-1 p-2 w-80">
      <div className="">
        <img className="rounded-lg w-full" src={thumbnails?.medium?.url} alt="thumbnail" />
      </div>
      <div className="flex">
        <div className="mt-3">
            <img className="w-8 rounded-full mr-2" src={channelLogo} alt="" />
        </div>
        <div className="mt-2 w-64">
            <h3 className="font-bold text-wrap">{title}</h3>
            <h4>{channelTitle}</h4>
            <div className="flex">
            <h5 className="mr-1 pr-1">{formatViewCount(statistics?.viewCount)}</h5>
            <span>•</span>
            <h5 className="pl-1 ml-1">{new Date(publishedAt).toLocaleDateString()}</h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
