import React, { useState } from "react";
import { usePhotos } from "../context/PhotoContext";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { handleSearch } = usePhotos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearch(searchQuery.trim());
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for beautiful photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i> Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
