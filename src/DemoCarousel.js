import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const DemoCarousel = () => {
  return (
    <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay>
      <div>
        <img
          className="carousel-img"
          src="https://themes-backend.material-ui.com/wp-content/uploads/2020/02/carolina-react-admin-dashboard-pro.png"
          alt=""
        />
        <div className="description">
          <h2>Merge Data Review</h2>
          <p>
            It gives data managers the power to efficiently manage quality data
            to ensure database lock readiness
          </p>
        </div>
      </div>
      <div>
        <img
          className="carousel-img"
          src="https://themes-backend.material-ui.com/wp-content/uploads/2020/02/carolina-react-admin-dashboard-pro.png"
          alt=""
        />
        <div className="description">
          <h2>Fund Platform</h2>
          <p>Hedge funds wealth management</p>
        </div>
      </div>
      <div>
        <img
          className="carousel-img"
          src="https://themes-backend.material-ui.com/wp-content/uploads/2020/02/carolina-react-admin-dashboard-pro.png"
          alt=""
        />
        <div className="description">
          <h2>Noviscient</h2>
          <p>Management Platform</p>
        </div>
      </div>
      <div>
        <img
          className="carousel-img"
          src="https://themes-backend.material-ui.com/wp-content/uploads/2020/02/carolina-react-admin-dashboard-pro.png"
          alt=""
        />
        <div className="description">
          <h2>Tokenplace</h2>
          <p>Multi-exchange Trading Terminal</p>
        </div>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
