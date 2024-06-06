import React from "react";
import { useSelector } from "react-redux";
import VideoCards from "../BodyContainer/VideoContainer/VideoCards";
import { Col, Row } from "react-bootstrap";
import "./_likedVideo.scss";

const LikedVideos = () => {
  const likedVideos = useSelector((store) => store.likedVideosList.likedVideos);
  console.log(likedVideos);
  return (
    <div>
      {likedVideos.length !== 0 ? (
        <Row>
          {/* {"" !== "1"
          ? [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonCard />
              </Col>
            )) */}
          {likedVideos?.map((likeVideo) => (
            <Col key={likeVideo.id} lg={3} md={4}>
              <VideoCards videoDetails={likeVideo} />
            </Col>
          ))}
        </Row>
      ) : (
        <section className="custom-message">
          <div>
            You havn't liked any videos, Please like the video to see the liked
            videos
          </div>
        </section>
      )}
    </div>
  );
};

export default LikedVideos;
