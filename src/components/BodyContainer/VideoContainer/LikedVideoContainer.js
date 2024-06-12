import React, { useEffect, useState } from "react";
import "./videoCard.scss";
import moment from "moment";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

const LikedVideoContainer = ({ likedVideo }) => {
  const navigate = useNavigate();

  const {
    id,
    snippet: { channelTitle, title, publishedAt, thumbnails },
    statistics: { viewCount, likeCount },
  } = likedVideo.videoDetails;
  const channelImg = likedVideo.channelDetails.snippet.thumbnails;
  const tumbnail = thumbnails.medium.url;
  const published = moment(publishedAt).fromNow();
  const videoId = id?.videoId || id;

  const handleNavigateToWatchPage = () => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div className="video-card" onClick={handleNavigateToWatchPage}>
      <div className="video-tumbnail-img">
        <img src={tumbnail} alt="tumbnail" />
      </div>
      <div className="video-details">
        <div className="author-chanel-img">
          <img src={channelImg.medium.url} alt="author-img" />
        </div>
        <div className="video-title">
          <span>{title}</span>
          <div className="video-author-details">{channelTitle}</div>
          <div className="video-meta-data">
            <span>{numeral(viewCount).format("0.a")} views</span>
            <span>•</span>
            {published === "a day ago" ? (
              <span>1 day ago</span>
            ) : (
              <span>{published}</span>
            )}
          </div>
        </div>
        <div className="yt-spec-icon">
          <span>&#8942;</span>
        </div>
      </div>
    </div>
  );
};

export default LikedVideoContainer;
