import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { getVideosApi } from "../../../Constants/API/Api";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import CatagoriesBar from "../../CategoriesBar/CatagoriesBar";

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
      <Row>
        {
          videoItems && (
            // videoItems?.map((item) => (
            //   <Col lg={3} md={4}>
            <VideoCards videoDetails={videoItems[0].snippet} />
          )
          //   </Col>
          // ))}
        }
      </Row>

      {/* <Link to={"/watch?v=" + item.id} key={item.id}>
          
           </Link> */}
    </div>
  );
};

export default VideoContainer;
