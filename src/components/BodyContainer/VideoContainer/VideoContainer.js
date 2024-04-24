import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { getVideosApi } from "../../../Constants/API/Api";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import CatagoriesBar from "../../CategoriesBar/CatagoriesBar";
import "./videoCard.scss";
import VideoRows from "./VideoRows";

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
      <CatagoriesBar />
      <div className="video-section-container">
        {videoItems && <VideoRows videoItems={videoItems} />}
      </div>
      {/* <Link to={"/watch?v=" + item.id} key={item.id}>
          
           </Link> */}
    </div>
  );
};

export default VideoContainer;
