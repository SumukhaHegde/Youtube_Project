import React from "react";
import { useSelector } from "react-redux";
import VideoCards from "../BodyContainer/VideoContainer/VideoCards";

const LikedVideos = () => {
  const likedVideos = useSelector((store) => store.likedVideosList.likedVideos);
  return (
    <div>
      <VideoCards videoDetails={likedVideos} />
    </div>
  );
};

export default LikedVideos;
