import React from "react";
import logo from "../../Images/youTubeLogo.png";
import userIcon from "../../Images/UserIcon.jpg";
import ".//Header_module.scss";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <div>☰</div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <div>
          <button className="bgc">🔔</button>
          <img src={userIcon} alt="UserIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
