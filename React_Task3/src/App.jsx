import React from "react";
import "./App.css";
import { PhotoProvider } from "./context/PhotoContext";
import SearchForm from "./components/SearchForm";
import PopularTags from "./components/PopularTags";
import PhotoGrid from "./components/PhotoGrid";
import Header from "./components/Header";

function App() {
  return (
    <PhotoProvider>
      <div className="App">
        <Header />
        <div className="container">
          <SearchForm />
          <PopularTags />
          <PhotoGrid />
        </div>
        <footer className="footer">
          <p>
            Photos provided by <span className="pexels">Pexels</span>
          </p>
        </footer>
      </div>
    </PhotoProvider>
  );
}

export default App;
