import React, { useEffect, useState } from "react";
import LeftPane from "./LeftPaneContainer/LeftPane";
import "./body.scss";
import VideoContainer from "./VideoContainer/VideoContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="body-container" style={{ height: "100%" }}>
      <LeftPane />
      <Outlet />
    </div>
  );
};

export default Body;
