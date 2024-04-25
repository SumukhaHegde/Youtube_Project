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
    <div>
      <CatagoriesBar />
      <Row>
        {videoItems &&
          videoItems.map((item) => (
            <Col lg={3} md={4} sm={5}>
              <VideoCards key={item.id} videoDetails={item.snippet} />
            </Col>
          ))}
      </Row>
      {/* <Link to={"/watch?v=" + item.id} key={item.id}>
          
           </Link> */}
    </div>
  );
};

export default VideoContainer;
