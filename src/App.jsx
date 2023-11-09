import React from "react";
import moviesList from "./assets/movies.json";
import Section from "./components/MovieSections/index.jsx";
import "./App.css";

function App() {
  return (
    <div className="movieList">
      {moviesList.map((item, index) => (
        <Section key={index} images={item.images} category={item.category} />
      ))}
    </div>
  );
}

export default App;
