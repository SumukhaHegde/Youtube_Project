import React from "react";
import "./_videoSuggestionsList.scss";
import moment from "moment";
import { Col, Row } from "react-bootstrap";
import numeral from "numeral";
import { IoEyeSharp } from "react-icons/io5";

const VideoSuggestionsList = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const published = moment("2020-05-05").fromNow();

  return (
    <Row className="video-suggestion">
      <Col xs={6} md={4} className="video-thumbnai-section">
        <img
          className="video-thumbnail"
          src="https://yt3.ggpht.com/yti/ANjgQV-7v3OAFwuOuuyI0r48ZKgq4yfkhxi309vivuekIg=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
        <span>{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="video-details-section">
        <div className="video-title">Be a full stack Engineer</div>
        <div className="video-details">
          <span>
            <IoEyeSharp className="views-icon" /> {numeral(10000).format("0.a")}{" "}
            views
          </span>
          <span> • </span>
          {published === "a day ago" ? (
            <span>1 day ago</span>
          ) : (
            <span>{published}</span>
          )}
        </div>
        <div className="channel-name">
          {/* <img src="" alt="" /> */}
          <p>ChannelName</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoSuggestionsList;
