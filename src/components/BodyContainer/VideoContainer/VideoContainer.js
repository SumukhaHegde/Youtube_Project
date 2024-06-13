import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { getAllVideos, getVidesByCategories } from "../../../Constants/API/Api";
import { Col, Row } from "react-bootstrap";
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

  const addvideosListToReducer = (videoJsonData) => {
    const items = videoJsonData?.data?.items;
    dispatch(
      addVideosList({
        videos: [...videos, ...items],
        nextPageToken: videoJsonData.data.nextPageToken,
        activeCategory: activeCategory,
      })
    );
  };

  const getVideos = async () => {
    const videoJsonData = await getAllVideos(nextPageToken);
    addvideosListToReducer(videoJsonData);
  };
  const getVidesByCategory = async (activeCategory) => {
    const videoJsonData = await getVidesByCategories(activeCategory);
    addvideosListToReducer(videoJsonData);
  };

  useEffect(() => {
    getVideos();
  }, []);

  const getData = () => {
    if (activeCategory === "All") getVideos();
    else {
      getVidesByCategory(activeCategory);
    }
  };
  return (
    <div>
      <CatagoriesBar />
      <Row>
        {/* {"" !== "1"
          ? [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonCard />
              </Col>
            )) */}
        {/*//Todo: infinite scroll code off*/}
        {/* {videos &&
          videos?.map((item) => (
            <Col key={item.id} lg={3} md={4}>
              <VideoCards videoDetails={item} />
            </Col>
          ))}
      </Row> */}
        <InfiniteScroll
          dataLength={videos && videos.length}
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
        </InfiniteScroll>{" "}
      </Row>
      {/* <Link to={"/watch?v=" + item.id} key={item.id}>
          
           </Link> */}
    </div>
  );
};

export default VideoContainer;
