import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import {
  fetchData,
  getAllVideos,
  getVideosApi,
  getVidesByCategories,
} from "../../../Constants/API/Api";
import { Col, Container, Row } from "react-bootstrap";
import CatagoriesBar from "../../CategoriesBar/CatagoriesBar";
import "./videoCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { addVideosList } from "../../../Utils/store/videoItemsSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos, nextPageToken, activeCategory } = useSelector(
    (store) => store.containerVideos.videosList
  );

  const getVideos = async () => {
    const videoJsonData = await getAllVideos(nextPageToken);

    const items = videoJsonData?.data?.items;
    dispatch(
      addVideosList({
        videos: activeCategory === "All" ? [...videos, ...items] : items,
        nextPageToken: videoJsonData.data.nextPageToken,
        activeCategory: "All",
      })
    );
  };

  useEffect(() => {
    getVideos();
  }, []);

  const getData = () => {
    if (activeCategory === "All") getVideos();
    else {
      getVidesByCategories(activeCategory);
    }
  };
  return (
    <div>
      <CatagoriesBar />

      <InfiniteScroll
        dataLength={videos ? videos.length : 0}
        next={getData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {videos &&
          videos?.map((item) => (
            <Col key={item.id} lg={3} md={4} sm={5}>
              <VideoCards videoDetails={item} />
            </Col>
          ))}
      </InfiniteScroll>
      {/* <Link to={"/watch?v=" + item.id} key={item.id}>
          
           </Link> */}
    </div>
  );
};

export default VideoContainer;
