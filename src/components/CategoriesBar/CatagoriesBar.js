import React, { useState } from "react";
import "./_categoriesBar.scss";
import {
  fetchData,
  getVideoApi,
  getVidesByCategories,
} from "../../Constants/API/Api";
import { json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideosList } from "../../Utils/store/videoItemsSlice";

const CatagoriesBar = () => {
  const dispatch = useDispatch();
  const { videos, activeCategory } = useSelector(
    (store) => store.containerVideos.videosList
  );
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

  const handleClick = async (category) => {
    const {
      data: { items, nextPageToken },
    } = await getVidesByCategories(category);

    dispatch(
      addVideosList({
        videos: activeCategory === category ? [...videos, ...items] : items,
        nextPageToken: nextPageToken,
        activeCategory: category,
      })
    );
  };

  return (
    <div className="caregories-bar">
      {categories.map((category, index) => (
        <span key={index} onClick={() => handleClick(category)}>
          {category}
        </span>
      ))}
    </div>
  );
};

export default CatagoriesBar;
