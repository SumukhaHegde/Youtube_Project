import React, { useEffect, useState } from "react";
import "./videoCard.scss";
import moment from "moment";
import numeral from "numeral";
import { baseURL, getChannelId } from "../../../Constants/API/Api";
const VideoCards = ({ videoDetails }) => {
  const [views, setViews] = useState(null);
  const [videoDuration, setVideoDuration] = useState(null);
  const [channelImg, setChannelImg] = useState(null);

  const {
    snippet: { channelId, channelTitle, title, publishedAt, thumbnails },
    contentDetails: { duration },
    statistics: { viewCount },
  } = videoDetails;
  const tumbnail = thumbnails.medium.url;
  const published = moment(publishedAt).fromNow();
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const getChannelIcon = async () => {
    const data = await fetch(getChannelId(channelId));
    const jsonData = await data.json();
    const channelImg = jsonData.items[0].snippet.thumbnails.default.url;
    setChannelImg(channelImg);
  };

  useEffect(() => {
    getChannelIcon();
  }, []);

  return (
    <div className="video-card">
      <div className="video-tumbnail-img">
        <img src={tumbnail} alt="tumbnail" />
        <span>{_duration}</span>
      </div>
      <div className="video-details">
        <div className="author-chanel-img">
          <img src={channelImg} alt="author-img" />
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

export default VideoCards;
