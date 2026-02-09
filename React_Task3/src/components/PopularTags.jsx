import React from "react";
import { usePhotos } from "../context/PhotoContext";

const PopularTags = () => {
  const { handleSearch } = usePhotos();

  const popularTags = [
    "Nature",
    "Ocean",
    "City",
    "Mountains",
    "Sky",
    "Animals",
    "Food",
    "Travel",
  ];

  return (
    <div className="popular-section">
      <h3 className="section-title">Popular:</h3>
      <div className="tags-container">
        {popularTags.map((tag) => (
          <button
            key={tag}
            className="tag"
            onClick={() => handleSearch(tag.toLowerCase())}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
