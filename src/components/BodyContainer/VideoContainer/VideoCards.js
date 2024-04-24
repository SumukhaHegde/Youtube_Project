import React from "react";
import "./videoCard.scss";
const VideoCards = ({ videoDetails }) => {
  //console.log(videoDetails);
  const { channelTitle, title, publishedAt, thumbnails } = videoDetails;
  const tumbnail = thumbnails.medium.url;
  // const todayDate = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  // const publishedDate = publishedAt.slice(0, 10).replaceAll("-", "");
  // const numberOfYears = todayDate - publishedDate;

  return (
    <div className="video-card">
      <div className="video-tumbnail-img">
        <img src={tumbnail} alt="tumbnail" />
        <span>05:10</span>
      </div>
      <div className="video-details">
        <div className="author-chanel-img">
          <img
            src="https://yt3.ggpht.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s68-c-k-c0x00ffffff-no-rj"
            alt="author-img"
          />
        </div>
        <div className="video-title">
          <span>{title}</span>
          <div className="video-author-details">{channelTitle}</div>
          <div className="video-meta-data">
            <span>23K views</span>
            <span>•</span>
            <span>2 years ago</span>
          </div>
        </div>
        <div className="yt-spec-icon">
          <span>&#8942;</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
