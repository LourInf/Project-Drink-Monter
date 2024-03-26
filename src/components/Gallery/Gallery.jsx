import React, { useState, useEffect } from "react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import "./Gallery.css";
import Carousel from "react-bootstrap/Carousel";

export const Gallery = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galeria</h1>
      {isSmallScreen ? (
        // Render single-image carousel for small screens
        <Carousel>
          <Carousel.Item>
            <img src={pic1} alt="bartenders" className="gallery-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={pic2} alt="bartenders" className="gallery-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={pic3} alt="bartenders" className="gallery-image" />
          </Carousel.Item>
        </Carousel>
      ) : (
        // Render multi-image carousel for larger screens
        <Carousel className="gallery-container">
          <Carousel.Item>
            <div className="carousel-multi-item">
              <img src={pic1} alt="bartenders" className="gallery-image" />
              <img src={pic2} alt="bartenders" className="gallery-image" />
              <img src={pic3} alt="bartenders" className="gallery-image" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-multi-item">
              <img src={pic1} alt="bartenders" className="gallery-image" />
              <img src={pic2} alt="bartenders" className="gallery-image" />
              <img src={pic3} alt="bartenders" className="gallery-image" />
            </div>
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};
