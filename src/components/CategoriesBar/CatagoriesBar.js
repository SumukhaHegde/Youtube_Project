import React, { useState } from "react";
import "./_categoriesBar.scss";
import { getVideoApi, getVidesByCategories } from "../../Constants/API/Api";
import { json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideosList } from "../../Utils/store/videoItemsSlice";

const CatagoriesBar = () => {
  const dispatch = useDispatch();
  const [videoList, setVideoList] = useState([]);
  const categories = [
    "All",
    "React js",
    "Angular js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm Art ",
    "Guitar",
    "Bengali Songs",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
    "Poor Coder",
    "Shwetabh",
  ];

  // const getVideoDetails = (videos) => {
  //   let itemList = [];
  //   videos.map(async (video) => {
  //     const videoData = await fetch(getVideoApi(video.id.videoId));
  //     const videoDataJson = await videoData.json();
  //     Promise.resolve(videoDataJson);
  //     console.log(videoDataJson);
  //     itemList = [...itemList, videoDataJson?.items[0]];
  //   });
  //   setVideoList([...videoList, itemList]);
  //   console.log(videoList);
  //   dispatch(addVideosList(videoList));
  // };

  // function handleClick(category) {
  //   return async () => {
  //     const data = await fetch(getVidesByCategories(category));
  //     const jsonData = await data.json();
  //     const videos = jsonData.items;
  //     getVideoDetails(videos);
  //   };
  // }
  // onClick={handleClick(category)}

  return (
    <div className="caregories-bar">
      {categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
    </div>
  );
};

export default CatagoriesBar;
