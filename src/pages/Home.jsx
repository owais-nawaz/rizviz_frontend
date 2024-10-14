import React from "react";
import "../styles/Home.css";
import Carousel2 from "../components/Carousel";
import { CarouselData } from "../data/CarouselData.js";

function Home() {
  return (
    <div className="homepage">
      <Carousel2 images={CarouselData} />
      <div className="hero-section">
        <div className="hero-text">Welcome to RIZVIZ</div>
      </div>
    </div>
  );
}

export default Home;
