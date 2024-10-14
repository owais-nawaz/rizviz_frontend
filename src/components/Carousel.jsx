import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Carousel.css";

function Carousel2({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = (link) => {
    if (link) {
      navigate(link); // Navigate to the provided link
    } else {
      console.error("Link is undefined");
    }
  };

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    const timeOut = autoPlay && setTimeout(slideRight, 2500);
    return () => clearTimeout(timeOut); // Cleanup timeout on unmount
  }, [autoPlay, current]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card-active"
                : "carousel_card"
            }
            onClick={() => handleButtonClick(image.link)}
          >
            <img className="card_image" src={image.image} alt="" />
            <div className="carousel_button">
              <button onClick={() => handleButtonClick(image.link)}>
                Show More
              </button>
            </div>
          </div>
        ))}
        ;
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
