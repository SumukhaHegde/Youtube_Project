import React, { useEffect, useState } from "react";
import LeftPane from "./LeftPaneContainer/LeftPane";
import VideoCards from "./VideoContainer/VideoCards";
import "./body.scss";
import { getVideosApi } from "../../Constants/API/Api";

const Body = () => {
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
    <div className="body-container" style={{ height: "100%" }}>
      <LeftPane />
      {videoItems &&
        videoItems?.map((item) => {
          <VideoCards key={item.id} videoDetails={item.snippet} />;
        })}
    </div>
  );
};

export default Body;
