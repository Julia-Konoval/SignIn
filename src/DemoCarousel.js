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
      <div description-container>
        <img
          className="carousel-img"
          src="https://desktop.arcgis.com/en/arcmap/10.7/manage-data/editing-parcels/GUID-5D7FB5F6-E79E-402E-A44C-07B7AFC97575-web.png"
        />
        <h1 className="legend">Merge Data Review</h1>
        <h2>
          It gives data managers the power to efficiently manage quality data{" "}
          <br />
          to ensure database lock readiness
        </h2>
      </div>
      <div description-container>
        <img
          className="carousel-img"
          src="https://capital.com/files/imgs/glossary/1200x627x1/Fund-platform-definition.jpeg"
        />
        <h1 className="legend">Fund Platform</h1>
        <h2>Hedge funds wealth management</h2>
      </div>
      <div description-container>
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
