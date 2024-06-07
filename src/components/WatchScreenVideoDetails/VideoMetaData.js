import React, { useEffect, useState } from "react";
import "./_videoMetaData.scss";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import numeral from "numeral";
import {
  getChannelDetailsByChannelId,
  getChannelSubscriptionStatus,
} from "../../Constants/API/Api";
import { useDispatch } from "react-redux";
import { addLikedVideos } from "../../Utils/store/likedVideosListSlice";

const VideoMetaData = ({ videoDetails, videoId }) => {
  const [channelDetails, setChannelDetails] = useState(null);

  const dispatch = useDispatch();
  const {
    snippet: { channelId, channelTitle, description, publishedAt, title },
    statistics: { likeCount, viewCount },
  } = videoDetails;

  const getChannelDetailsById = async () => {
    const { data } = await getChannelDetailsByChannelId(channelId);
    const channelDetails = data.items[0];
    setChannelDetails(channelDetails);
  };

  const handleLikeVideo = () => {
    dispatch(addLikedVideos(videoDetails));
  };

  //Todo - User has to be loggedin using his gmail account: hence will create this code once implemented with the login with google account
  // const getSubscriptionStatus = async () => {
  //   const subscriptionStatusData = await getChannelSubscriptionStatus(
  //     channelId
  //   );
  //   console.log(subscriptionStatusData);
  //   // const subscriptionStatus = subscriptionStatusData.data.items.length !== 0 (if item.length !=0 then user is subscribed)
  // };

  useEffect(() => {
    getChannelDetailsById();
    // getSubscriptionStatus();
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
            <div className="video-likes video-liked" onClick={handleLikeVideo}>
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
