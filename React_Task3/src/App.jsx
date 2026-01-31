import React, { useState, useEffect } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import PopularTags from "./components/PopularTags";
import PhotoGrid from "./components/PhotoGrid";
import Header from "./components/Header";

const API_KEY = "B5RgZLzINAYt0LXkhpO3c5UBwpNiySpPw78euXdfGRoVuPmwIzIreZZM";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("nature");

  const fetchPhotos = async (searchQuery = "nature") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=15`,
        {
          headers: {
            Authorization: API_KEY,
          },
        },
      );
      const data = await response.json();
      setPhotos(data.photos || []);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(query);
  }, []);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    fetchPhotos(searchQuery);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchForm onSearch={handleSearch} />
        <PopularTags onTagClick={handleSearch} />
        <PhotoGrid photos={photos} loading={loading} />
      </div>
      <footer className="footer">
        <p>
          Photos provided by <span className="pexels">Pexels</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
