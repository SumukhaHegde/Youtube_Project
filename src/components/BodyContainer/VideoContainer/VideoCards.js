import React from "react";
import "./videoCard.scss";
const VideoCards = (videoDetails) => {
  console.log(videoDetails);
  return (
    <div className="video-card">
      <div className="video-tumbnail-img">
        <img
          src="https://i.ytimg.com/vi/JIskeGNEVEk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARh_ICIoWDAP&rs=AOn4CLDE-zrZW2uy-mVvh8bmzMeNCXfRYQ"
          alt="tumbnail"
        />
      </div>
      <div className="video-details">
        <div className="author-chanel-img">
          <img
            src="https://yt3.ggpht.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s68-c-k-c0x00ffffff-no-rj"
            alt="author-img"
          />
        </div>
        <div className="video-title">
          SASS Tutorial (build your own CSS library) #14 - Making Utility
          Classes
          <div className="video-author-details">Net Ninja</div>
          <div className="video-meta-data">
            <span>23K views</span> &#8226; 2 years ago<span></span>
          </div>
        </div>
        <div>
          <span className="yt-spec-icon">&#8942;</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
