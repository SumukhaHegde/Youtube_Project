import React, { useEffect, useState } from "react";
import "./_videoMetaData.scss";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import numeral from "numeral";
import { getChannelDetailsByChannelId } from "../../Constants/API/Api";

const VideoMetaData = ({ videoDetails, videoId }) => {
  const [channelDetails, setChannelDetails] = useState(null);
  const {
    snippet: { channelId, channelTitle, description, publishedAt, title },
    statistics: { likeCount, viewCount },
  } = videoDetails;

  const getChannelDetailsById = async () => {
    const { data } = await getChannelDetailsByChannelId(channelId);
    const channelDetails = data.items[0];
    console.log(channelDetails);
    setChannelDetails(channelDetails);
  };

  useEffect(() => {
    getChannelDetailsById();
  }, [videoId]);
  return (
    channelDetails && (
      <div className="video-description">
        <div className="video-title">
          <span>{title}</span>
        </div>
        <div className="meta-data">
          <div className="channel">
            <div className="channel-info">
              <img
                className="channel-image"
                src={channelDetails.snippet.thumbnails.default.url}
                alt=""
              ></img>
              <div className="channel-details">
                <span className="channel-name">{channelTitle}</span>

                <span className="channel-subscribers">
                  {numeral(channelDetails.statistics.subscriberCount).format(
                    "0.a"
                  )}{" "}
                  Subscribers
                </span>
              </div>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="video-likes-dislikes">
            <div className="video-likes">
              <IoMdThumbsUp />
              <span>{numeral(likeCount).format("0.a")}</span>
            </div>
            <div className="video-dislikes">
              <IoMdThumbsDown />
              <span>{numeral(10000).format("0.a")}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default VideoMetaData;
