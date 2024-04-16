import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import "../body.scss";
import { getVideosApi } from "../../../Constants/API/Api";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoItems, setVideoItems] = useState([]);
  const getVideos = async () => {
    const videoData = await fetch(getVideosApi);
    const videoJsonData = await videoData.json();
    const items = videoJsonData?.items;
    setVideoItems(items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="video-container">
      {videoItems &&
        videoItems?.map((item) => (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VideoCards videoDetails={item.snippet} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
