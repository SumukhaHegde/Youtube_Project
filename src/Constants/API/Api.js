import axios from "axios";
const GOOGLE_API = process.env.REACT_APP_YT_API_KEY;
export const getVideosApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&maxResults=48&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API;

export const getAllVideos = async (nextPageToken) => {
  return await fetchData("/videos", {
    params: {
      part: ["snippet", "contentDetails", "statistics"],
      chart: "mostPopular",
      regionCode: "IN",
      pageToken: nextPageToken,
      maxResults: 20,
    },
    paramsSerializer: {
      indexes: null,
    },
  });
};
export const getVidesByCategories = async (keyword) => {
  return await fetchData("/search", {
    params: {
      part: "snippet",
      type: "video",
      maxResults: 20,
      q: keyword,
    },
  });
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
  baseURL: process.env.REACT_APP_YT_BASE_URL,
  params: { key: GOOGLE_API },
});
