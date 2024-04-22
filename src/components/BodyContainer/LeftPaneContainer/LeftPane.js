import React from "react";
import "./LeftPane.scss";
import "./LeftPaneGuideSection.scss";
import LeftPaneGuide from "./LeftPaneGuide";
import { useSelector } from "react-redux";
import { MdHome, MdOutlineVideoLibrary, MdSubscriptions } from "react-icons/md";
import { BiLike } from "react-icons/bi";
const LeftPane = () => {
  const { isLeftPaneExpanded } = useSelector((store) => store.leftPaneGuide);
  return (
    <div
      className={isLeftPaneExpanded ? "left-pane-expanded" : "left-pane"}
      // style={{
      //   width: isLeftPaneExpanded ? "15%" : "5%",
      //   overflow: isLeftPaneExpanded ? "" : "hidden",
      // }}
    >
      {isLeftPaneExpanded ? (
        <LeftPaneGuide />
      ) : (
        <div className="left-pane-items">
          {/* <Link to="/"> */}
          <div className="left-pane-icon home-icon">
            <div>
              <MdHome className="side-bar-icons" />
              Home
            </div>
          </div>
          {/* </Link> */}
          <div className="left-pane-icon liked-icon">
            <div>
              <BiLike className="side-bar-icons" />
              <span>Liked videos</span>
            </div>
          </div>
          <div className="left-pane-icon subs-icon">
            <div>
              <MdSubscriptions className="side-bar-icons" />
              Subscriptions
            </div>
          </div>
          <div className="left-pane-icon you-icon">
            <div>
              <MdOutlineVideoLibrary className="side-bar-icons" />
              You
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPane;
