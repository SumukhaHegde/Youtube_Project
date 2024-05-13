import axios from "axios";
import auth from "../../firebase";

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

export const getVideoDetailsByVideoId = async (id) => {
  return await fetchData("/videos", {
    params: {
      part: ["snippet", "statistics"],
      id: id,
    },
    paramsSerializer: {
      indexes: null,
    },
  });
};

export const getChannelDetailsByChannelId = async (id) => {
  return await fetchData("/channels", {
    params: {
      part: ["snippet", "contentDetails", "statistics"],
      id: id,
    },
    paramsSerializer: {
      indexes: null,
    },
  });
};

// export const getChannelSubscriptionStatus = async (channelId) => {
//   console.log(auth.accessToken);
//   return await fetchData("/subscriptions", {
//     params: {
//       part: "snippet",
//       forChannelId: channelId,
//       mine: true,
//     },
//     headers: {
//       Authorization: `Bearer ${auth.accessToken}`,
//       Accept: " application / json",
//     },
//   });
// };

export const getCommentsForVideo = async (videoId) => {
  return await fetchData("/commentThreads", {
    params: {
      part: "snippet",
      videoId: videoId,
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
