import React from "react";
import "./_videoSuggestionsList.scss";
import moment from "moment";
import { Col, Row } from "react-bootstrap";
import numeral from "numeral";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const VideoSuggestionsList = ({ videoDetails }) => {
  const navigate = useNavigate();
  const {
    id,
    snippet: { title, channelTitle, publishedAt, thumbnails },
    contentDetails: { duration },
    statistics: { viewCount },
  } = videoDetails;
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const published = moment(publishedAt).fromNow();

  const handleVideoNavigation = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <Row className="video-suggestion" onClick={handleVideoNavigation}>
      <Col xs={6} md={4} className="video-thumbnai-section">
        <img className="video-thumbnail" src={thumbnails.medium.url} alt="" />
        <span>{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="video-details-section">
        <div className="video-title">{title}</div>
        <div className="video-details">
          <span>
            <IoEyeSharp className="views-icon" />{" "}
            {numeral(viewCount).format("0.a")} views
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
          <p>{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoSuggestionsList;
