import React from "react";
import "./LeftPane.scss";
import "./LeftPaneGuideSection.scss";
import shorts from "../../../Constants/Images/shorts_icon.png";
import subscription from "../../../Constants/Images/subscription_icon.jpg";
import youIcon from "../../../Constants/Images/you_icon.png";
import homeIcon from "../../../Constants/Images/home-icon.png";
import LeftPaneGuide from "./LeftPaneGuide";
import { useSelector } from "react-redux";
const LeftPane = () => {
  const { isLeftPaneExpanded } = useSelector((store) => store.leftPaneGuide);
  return (
    <div
      className="left-pane"
      style={{
        width: isLeftPaneExpanded ? "10%" : "5%",
        overflow: isLeftPaneExpanded ? "" : "hidden",
      }}
    >
      {isLeftPaneExpanded ? (
        <LeftPaneGuide />
      ) : (
        <div className="left-container">
          <div className="left-pane-items">
            <div className="left-pane-home">
              <img src={homeIcon} />
              Home
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
      )}
    </div>
  );
};

export default LeftPane;
