import React from "react";
import "./ProductCard.css";
import { Link } from "react-router";

const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <Link to={`/product/${data.id}`}>
      <img className="card-img" src={data.image} alt={data.title} />
        <h2 className="card-title">{data.title}</h2>
      </Link>
      <p className="card-price">${data.price}</p> {/* Convert USD to INR */}
    </div>
  );
};

export default ProductCard;
