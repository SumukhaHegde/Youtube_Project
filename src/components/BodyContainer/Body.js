import React from "react";
import LeftPane from "./LeftPaneContainer/LeftPane";
import VideoCards from "./VideoContainer/VideoCards";
import "./body.scss";

const Body = () => {
  return (
    <div className="body-container" style={{ height: "100%" }}>
      <LeftPane />
      <VideoCards />
    </div>
  );
};

export default Body;
