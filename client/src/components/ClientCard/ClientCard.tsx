import React from "react";
import "./clientCard.css";

interface ClientCardProps {
  image: string;
  title: string;
  price: number;
  rating?: number;
  onViewDetails?: () => void;
  onAddToCart?: () => void;
}

export default function ClientCard({
  image,
  title,
  price,
  rating = 0,
  onViewDetails,
  onAddToCart,
}: ClientCardProps) {
  return (
    <div className="clientCard">
      <div className="clientCardImage">
        <img src={image} alt={title} />
        <div className="clientCardBadge">New</div>
      </div>
      <div className="clientCardInfo">
        <h3>{title}</h3>
        <div className="clientCardRating">
          {"★".repeat(Math.round(rating))}
          {"☆".repeat(5 - Math.round(rating))}
        </div>
        <p className="clientCardPrice">${price.toFixed(2)}</p>
        <div className="clientCardActions">
          <button className="clientCardBtn" onClick={onViewDetails}>
            View
          </button>
          <button className="clientCardBtn primary" onClick={onAddToCart}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
