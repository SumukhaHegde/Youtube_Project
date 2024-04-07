import React from "react";
import logo from "../Images/youTubeLogo.png";
import userIcon from "../Images/UserIcon.jpg";
const Header = () => {
  return (
    <div>
      <div>
        <div>
          <div>☰</div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <div>
          <button>🔔</button>
          <img src={userIcon} alt="UserIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
