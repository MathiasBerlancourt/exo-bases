import React from "react";
import "./styles.css";

const Section = ({ images, category }) => {
  return (
    <div className="container">
      <h2 className="title">{category}</h2>
      <div className="movieRow">
        {images.map((image, index) => {
          return <img key={index} alt="movie+${index}" src={image} />;
        })}
      </div>
    </div>
  );
};
export default Section;
