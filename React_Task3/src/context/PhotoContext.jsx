import React, { createContext, useState, useContext, useEffect } from "react";

const PhotoContext = createContext();

const API_KEY = "B5RgZLzINAYt0LXkhpO3c5UBwpNiySpPw78euXdfGRoVuPmwIzIreZZM";

export const PhotoProvider = ({ children }) => {
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

  const value = {
    photos,
    loading,
    query,
    handleSearch,
  };

  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error("usePhotos must be used within PhotoProvider");
  }
  return context;
};

export default PhotoContext;
