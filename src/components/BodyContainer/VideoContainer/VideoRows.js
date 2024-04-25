import React from "react";
import VideoCards from "./VideoCards";
import "./videoCard.scss";

const VideoRows = () => {
  //Todo- This is still in implementation. This is a developer dynamic code for rows and columns
  // const container = document.querySelector(".video-section-container");
  // if (container === null) return;
  // const numberOfRows = parseInt(
  //   getComputedStyle(container).getPropertyValue("--no-of-videos-per-row")
  // );
  // const rows = [...Array(Math.ceil(videoItems.length / numberOfRows))];
  // const videoItemRows = rows.map((row, index) =>
  //   videoItems.slice(index * numberOfRows, index * numberOfRows + numberOfRows)
  // );
  // console.log(numberOfRows);

  return (
    <>
      {videoItemRows?.map((items, index) => (
        <div key={index} className="video-row"></div>
      ))}
    </>
  );
};

export default VideoRows;
