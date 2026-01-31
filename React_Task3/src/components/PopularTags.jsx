import React from "react";

const PopularTags = ({ onTagClick }) => {
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
            onClick={() => onTagClick(tag.toLowerCase())}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
