import React from "react";
import "../styles/FeaturedProducts.css"; // Assuming your CSS is in the correct path

const ProductCard = ({ product }) => {
  return (
    <div className="featured-product">
      {product.isSoldOut && <div className="sold-out-badge">Sold out</div>}
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="prices">
          <div className="old-price">Rs. {product.oldPrice}</div>
          <div className="new-price">Rs. {product.newPrice}</div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = ({ products }) => {
  return (
    <div className="grid-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
