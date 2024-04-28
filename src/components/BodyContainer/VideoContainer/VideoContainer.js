import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { fetchData, getVideosApi } from "../../../Constants/API/Api";
import { Col, Container, Row } from "react-bootstrap";
import CatagoriesBar from "../../CategoriesBar/CatagoriesBar";
import "./videoCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { addVideosList } from "../../../Utils/store/videoItemsSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  //const videoItems = useSelector((store) => store.containerVideos.videos);
  const [items, setItems] = useState(null);
  const getVideos = async () => {
    const videoJsonData = await fetchData.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        pageToken: "",
        maxResults: 20,
      },
    });

    console.log(videoJsonData);
    const items = videoJsonData?.items;
    dispatch(addVideosList(items));
    setItems(items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div>
      <CatagoriesBar />
      <Row>
        {items &&
          items?.map((item) => (
            <Col key={item.id} lg={3} md={4} sm={5}>
              <VideoCards videoDetails={item} />
            </Col>
          ))}
      </Row>
      {/* <Link to={"/watch?v=" + item.id} key={item.id}>
          
           </Link> */}
    </div>
  );
};

export default VideoContainer;
