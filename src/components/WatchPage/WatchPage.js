import React from "react";
import { useSearchParams } from "react-router-dom";
import "./VideoPlayer.scss";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="watch-page-video-container">
      <iframe
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
