import React from "react";
import { Col, Row } from "react-bootstrap";
import "./_watchScreen.scss";
import VideoMetaData from "../WatchScreenVideoDetails/VideoMetaData";
import VideoSuggestionsList from "../VideoSuggestionsList/VideoSuggestionsList";
import CommentsSection from "../Comments/CommentsSection";

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={9}>
        <div className="watch-screen">
          <iframe
            src="https://www.youtube.com/embed/0Po2g_qQwlk?si=RTIigwdg_S5SSBG9"
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
