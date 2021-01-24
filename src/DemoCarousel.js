import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      autoPlay
      showThumbs={false}
      className="carousel-container"
    >
      <div className="description-container">
        <img
          className="carousel-img"
          src="https://capital.com/files/imgs/glossary/1200x627x1/Fund-platform-definition.jpeg"
        />
        <h1 className="legend">Fund Platform</h1>
        <h2>Hedge funds wealth management</h2>
      </div>
      <div className="description-container">
        <img
          className="carousel-img"
          src="https://www.beroeinc.com/images/content/the-best-fit-data-management-platform-can-cut-down-wasteful-marketing-spend.png"
        />
        <h1 className="legend">Noviscient</h1>
        <h2>Management Platform</h2>
      </div>
      <div className="description-container">
        <img
          className="carousel-img"
          src="https://nordclan.com/uploads/172152c9454943f19e53e607a7d60d12.png"
        />
        <h1 className="legend">Tokenplace</h1>
        <h2>Multi-exchange Trading Terminal</h2>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
