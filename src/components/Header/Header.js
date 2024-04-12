import React, { useState } from "react";
import logo from "../../Constants/Images/youTubeLogo.png";
import userIcon from "../../Constants/Images/UserIcon.jpg";
import ".//Header_module.scss";
import { setIsleftPaneExpanded } from "../../Utils/store/leftPaneSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();

  const handleLeftPaneExpansion = () => {
    dispatch(setIsleftPaneExpanded());
  };

  return (
    <div>
      <div className="header">
        <div className="header-left-section">
          <div className="yt-hamburger" onClick={handleLeftPaneExpansion}>
            ☰
          </div>
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
