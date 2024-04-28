import axios from "axios";
const GOOGLE_API = process.env.REACT_APP_YT_API_KEY;
export const getVideosApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&maxResults=48&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API;

export const getVideoApi = (id) => {
  return (
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&id=${id}` +
    "&key=" +
    GOOGLE_API
  );
};
export const getVidesByCategories = (keyword) => {
  return (
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&q=${keyword}
    ` +
    "&key=" +
    GOOGLE_API
  );
};

export const getChannelId = (channelId) => {
  return (
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}` +
    "&key=" +
    GOOGLE_API
  );
};

export const searchSuggestionsApi =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const fetchData = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: GOOGLE_API,
});
