const GOOGLE_API = "AIzaSyDocf44fO70AHU15IAxFnEw_Eu1L-VVJfk";

export const getVideosApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API;
