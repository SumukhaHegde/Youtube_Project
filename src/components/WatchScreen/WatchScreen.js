import React from "react";
import { Col, Row } from "react-bootstrap";
import "./_watchScreen.scss";
import VideoMetaData from "../WatchScreenVideoDetails/VideoMetaData";
import VideoSuggestionsList from "../VideoSuggestionsList/VideoSuggestionsList";
import CommentsSection from "../Comments/CommentsSection";
import { useParams } from "react-router-dom";

const WatchScreen = () => {
  const params = useParams();
  const videoId = params.key;
  return (
    <Row style={{ marginTop: "1rem" }}>
      <Col lg={9}>
        <div className="watch-screen">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            title="This is Sample"
            width="100%"
            height="100%"
          ></iframe>
          <VideoMetaData />
          <CommentsSection />
        </div>
      </Col>
      <Col lg={3}>
        {[...Array(10)].map(() => (
          <VideoSuggestionsList />
        ))}{" "}
      </Col>
    </Row>
  );
};

export default WatchScreen;
