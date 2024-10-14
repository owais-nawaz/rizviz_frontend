import React from "react";
import "../styles/Home.css";
import Carousel2 from "../components/Carousel";
import { CarouselData } from "../data/carouselData.js";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import products from "../data/productsData.js";

function Home() {
  return (
    <div className="homepage">
      <Carousel2 images={CarouselData} />
      <div className="featured-products-comp">
        <h2>Featured products</h2>
        <FeaturedProducts products={products} />
      </div>
      <div className="hero-section">
        <div className="hero-text">Welcome to RIZVIZ</div>
      </div>
    </div>
  );
}

export default Home;
