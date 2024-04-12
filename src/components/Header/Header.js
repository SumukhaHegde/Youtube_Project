import React from "react";
import logo from "../../Images/youTubeLogo.png";
import userIcon from "../../Images/UserIcon.jpg";
import ".//Header_module.scss";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-left-section">
          <div className="yt-hamburger">☰</div>
          <img className="yt-logo" src={logo} alt="logo" />
        </div>
        <div className="header-middle-section">
          <input className="search-bar" type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <div className="header-right-section">
          <button>🔔</button>
          <img className="user-icon" src={userIcon} alt="UserIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
