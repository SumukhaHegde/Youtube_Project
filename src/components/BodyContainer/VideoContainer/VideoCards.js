import React, { useEffect, useState } from "react";
import "./videoCard.scss";
import moment from "moment";
import numeral from "numeral";
import { fetchData } from "../../../Constants/API/Api";
import Skeleton from "react-loading-skeleton";

const VideoCards = ({ videoDetails }) => {
  const [views, setViews] = useState(null);
  const [videoDuration, setVideoDuration] = useState(null);
  const [channelImg, setChannelImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    id,
    snippet: { channelId, channelTitle, title, publishedAt, thumbnails },
  } = videoDetails;
  const tumbnail = thumbnails.medium.url;
  const published = moment(publishedAt).fromNow();
  const videoId = id?.videoId || id;

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await fetchData("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelImg(items[0].snippet.thumbnails.medium.url);
    };
    getChannelIcon();
  }, []);

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await fetchData("/videos", {
        params: {
          part: ["contentDetails", "statistics"],
          id: videoId,
        },
        paramsSerializer: {
          indexes: null,
        },
      });

      const seconds = moment
        .duration(items[0].contentDetails.duration)
        .asSeconds();
      const _duration = moment.utc(seconds * 1000).format("mm:ss");
      setVideoDuration(_duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, []);

  return isLoading ? (
    <div className="video-card">
      <div className="video-tumbnail-img">
        <img src={tumbnail} alt="tumbnail" />
        <span>{videoDuration}</span>
      </div>
      <div className="video-details">
        <div className="author-chanel-img">
          <img src={channelImg} alt="author-img" />
        </div>
        <div className="video-title">
          <span>{title}</span>
          <div className="video-author-details">{channelTitle}</div>
          <div className="video-meta-data">
            <span>{numeral(views).format("0.a")} views</span>
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
  ) : (
    <Skeleton />
  );
};

export default VideoCards;
