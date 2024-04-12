import React from "react";
import "./LeftPane.scss";
import shorts from "../../../Images/shorts_icon.png";
import subscription from "../../../Images/subscription_icon.jpg";
import youIcon from "../../../Images/you_icon.png";

const LeftPane = () => {
  return (
    <div className="left-container">
      <div className="left-pane-items">
        <div className="left-pane-home">
          <icon>⌂</icon>Home
        </div>
        <div className="left-pane-shorts">
          <img src={shorts} />
          Shorts
        </div>
        <div className="left-pane-subscription">
          <img src={subscription} />
          Subscription
        </div>
        <div className="left-pane-you">
          <img src={youIcon} />
          You
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
