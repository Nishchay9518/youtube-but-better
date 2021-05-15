import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import "./categoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "react",
  "kshmr",
  "edm",
  "illenium",
  "design",
  "ui ux",
  "dsa",
  "coding",
  "pop music",
  "games",
  "podcast",
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
   'Shwetabh',
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if(value === 'All'){
        dispatch(getPopularVideos())
    }
    else{

        dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;

