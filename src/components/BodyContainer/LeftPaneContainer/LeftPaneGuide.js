import React from "react";
import historyIcon from "../../../Constants/Images/history-icon.png";
import playListIcon from "../../../Constants/Images/playlistIcon.png";
import likeIcon from "../../../Constants/Images/like-icon.png";
import trendingIcon from "../../../Constants/Images/trending-icon.png";
import musicIcon from "../../../Constants/Images/music-icon.png";
import moviesIcon from "../../../Constants/Images/movies-icon.png";
import beautyIcon from "../../../Constants/Images/fashionandbeauty-icon.jpg";
import shoppingIcon from "../../../Constants/Images/shopping-icon.png";
import newsIcon from "../../../Constants/Images/news-icon.jpg";
import podcastIcon from "../../../Constants/Images/podcast-icon.png";
import sportsIcon from "../../../Constants/Images/sports-icon.jpg";
import liveIcon from "../../../Constants/Images/live-icon.png";
import gamingIcon from "../../../Constants/Images/games-icon.png";
import settingIcon from "../../../Constants/Images/setting-icon.png";
import reportIcon from "../../../Constants/Images/report-icon.png";
import shorts from "../../../Constants/Images/shorts_icon.png";
import subscription from "../../../Constants/Images/subscription_icon.jpg";

import helpIcon from "../../../Constants/Images/help-icon.png";

import feedbackIcon from "../../../Constants/Images/feedback-icon.png";
import homeIcon from "../../../Constants/Images/home-icon.png";

const LeftPaneGuide = () => {
  return (
    <div className="yt-guide-section">
      <section className="yt-guide-home">
        <div>
          <img src={homeIcon} />
          <a href="">Home</a>
        </div>
        <div>
          <img src={shorts} />
          <a href="">Shorts</a>
        </div>
        <div>
          <img src={subscription} />
          <a href="">Subscription</a>
        </div>
      </section>
      <section className="yt-guide-You">
        <div className="yt-guide-name">
          <a href="">You &#62;</a>
        </div>
        <div>
          <img src={playListIcon} />
          <a href="">Playlists</a>
        </div>
        <div>
          <img src={historyIcon} />
          <a href="">History</a>
        </div>
        <div>
          <img src={likeIcon} />
          <a href="">Liked videos</a>
        </div>
      </section>
      <section className="yt-guide-Explore">
        <div className="yt-guide-name">
          <span href="">Explore</span>
        </div>
        <div>
          <img src={trendingIcon} />
          <a href="">Trending</a>
        </div>
        <div>
          <img src={musicIcon} />
          <a href="">Music</a>
        </div>
        <div>
          <img src={moviesIcon} /> <a href="">Movies</a>
        </div>
        <div>
          <img src={gamingIcon} />
          <a href="">Gaming</a>
        </div>
        <div>
          <img src={liveIcon} />
          <a href="">Live</a>
        </div>
        <div>
          <img src={shoppingIcon} />
          <a href="">Shopping</a>
        </div>
        <div>
          <img src={sportsIcon} />
          <a href="">Sports</a>
        </div>
        <div>
          <img src={podcastIcon} />
          <a href="">Podcasts</a>
        </div>
        <div>
          <img src={beautyIcon} />
          <a href="">Fashion & Beauty</a>
        </div>
        <div>
          <img src={newsIcon} />
          <a href="">News</a>
        </div>
      </section>
      <section className="yt-guide-Setting">
        <div>
          <img src={settingIcon} />
          <a href="">Settings</a>
        </div>
        <div>
          <img src={reportIcon} />
          <a href="">Report history</a>
        </div>
        <div>
          <img src={helpIcon} />
          <a href="">Help</a>
        </div>
        <div>
          <img src={feedbackIcon} />
          <a href="">Send feedback</a>
        </div>
      </section>
    </div>
  );
};

export default LeftPaneGuide;
