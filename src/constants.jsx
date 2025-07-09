const YOUTUBE_API_KEY = "AIzaSyDpvGZ6z6txy7fwxf86lGZBqTpvAbbEnaA"

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + YOUTUBE_API_KEY;
export const YOUTUBE_CHANNEL_INFO = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" + YOUTUBE_API_KEY + "&id=";
export const YOUTUBE_VIDEO_DETAILS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + YOUTUBE_API_KEY + "&id=";