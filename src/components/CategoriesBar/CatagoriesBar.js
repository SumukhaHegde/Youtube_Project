import React from "react";
import "./_categoriesBar.scss";

const CatagoriesBar = () => {
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
  return (
    <div className="caregories-bar">
      {categories.map((category, index) => (
        <span>{category}</span>
      ))}
    </div>
  );
};

export default CatagoriesBar;
