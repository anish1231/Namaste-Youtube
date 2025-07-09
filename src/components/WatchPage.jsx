import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_CHANNEL_INFO, YOUTUBE_VIDEO_DETAILS } from "../constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState(null)
  const [channelInfo, setChannelInfo] = useState(null)
  const [searchParams] = useSearchParams();
  const channelId = useRef(null)
  const videoId = searchParams.get("v");
  console.log(videoId);
  useEffect(() => {
    dispatch(closeSideBar());
    getVideoDeatils()
    
  }, []);
  const getVideoDeatils = async () => {
    const sUrl = YOUTUBE_VIDEO_DETAILS + searchParams.get("v")
    const data = await fetch(sUrl)
    const jsonData = await data.json()
    console.log(jsonData)
    setVideoData(jsonData.items[0])
    channelId.current = jsonData.items[0].snippet.channelId
    getChannelInfo()
  }
  const getChannelInfo = async () => {
          if(channelId){
            const sUrl = YOUTUBE_CHANNEL_INFO + channelId.current;
            const data = await fetch(sUrl)
            const json = await data.json();
            setChannelInfo(json?.items[0])
          }
    }
    const formatViewCount = (num) => {
        if (!num) return "";
        const count = parseInt(num, 10);
        if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + "M";
        if (count >= 1_000) return (count / 1_000).toFixed(1) + "K";
        return count.toString();
    };
    if(!videoData) return null;
  return (
    <div className="mx-20">
      <div className="rounded-lg">
        <iframe
          className="rounded-xl"
          width="1200"
          height="600"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h1 className="font-bold mt-2 text-xl">{videoData?.snippet?.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mt-3">
              <img
                className="w-10 rounded-full mr-2"
                src={channelInfo?.snippet?.thumbnails?.default?.url}
                alt="logo"
              />
            </div>
            <div className="mt-2 ml-1">
              <h1 className="font-bold">{channelInfo?.snippet?.title}</h1>
              <p className=" text-sm text-gray-700">
                {formatViewCount(channelInfo?.statistics?.subscriberCount) +
                  " " +
                  "Subscribers"}
              </p>
            </div>
            <button className="bg-black text-white px-3 ml-6 h-9 rounded-4xl mt-2 cursor-pointer">Subscribe</button>
          </div>
          <div>
            <div className="flex">
                  <button className=" bg-gray-200 rounded-l-full p-1 px-2 hover:bg-gray-300 cursor-pointer border-r border-gray-300">👍{formatViewCount(videoData?.statistics?.viewCount)}</button>
                  <button className="mr-1 bg-gray-200 rounded-r-full p-1 px-2 hover:bg-gray-300 cursor-pointer">👎</button>
                  <button className="mx-1 bg-gray-200 rounded-full p-1 w-16 hover:bg-gray-300 cursor-pointer">Share</button>
                  <button className="mx-1 bg-gray-200 rounded-full p-1 w-8 hover:bg-gray-300 cursor-pointer">•••</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
