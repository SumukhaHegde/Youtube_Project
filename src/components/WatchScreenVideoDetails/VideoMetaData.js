import React from "react";
import "./_videoMetaData.scss";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import numeral from "numeral";

const VideoMetaData = () => {
  return (
    <div className="video-description">
      <div className="video-title">
        <span>This is a Sample Video</span>
      </div>
      <div className="meta-data">
        <div className="channel">
          <div className="channel-info">
            <img
              className="channel-image"
              src="https://yt3.ggpht.com/yti/ANjgQV-7v3OAFwuOuuyI0r48ZKgq4yfkhxi309vivuekIg=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""
            ></img>
            <div className="channel-details">
              <span className="channel-name">Sample Channel Name</span>
              <span className="channel-subscribers">
                {numeral(10000).format("0.a")} Subscribers
              </span>
            </div>
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className="video-likes-dislikes">
          <div className="video-likes">
            <IoMdThumbsUp />
            <span>{numeral(10000).format("0.a")}</span>
          </div>
          <div className="video-dislikes">
            <IoMdThumbsDown />
            <span>{numeral(10000).format("0.a")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMetaData;
