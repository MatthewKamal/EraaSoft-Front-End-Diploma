import React from "react";
import { usePhotos } from "../context/PhotoContext";

const PhotoGrid = () => {
  const { photos, loading } = usePhotos();

  if (loading) {
    return <div className="loading">Loading beautiful photos...</div>;
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="no-photos">No photos found. Try a different search!</div>
    );
  }

  return (
    <div className="photo-grid">
      <h3 className="photo-grid-title">Search Results</h3>
      <div className="grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="photo-card"
            onClick={() => window.open(photo.url, "_blank")}
          >
            <img
              src={photo.src.medium}
              alt={photo.alt || "Photo from Pexels"}
              className="photo-img"
            />
            <div className="photo-info">
              <div className="photographer">
                <i className="fas fa-camera"></i>
                <span className="photographer-name">{photo.photographer}</span>
              </div>
              <a
                href={photo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="photo-link"
                onClick={(e) => e.stopPropagation()}
              >
                View on Pexels <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
