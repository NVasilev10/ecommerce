import { useState } from "react";
import "./rating.css";

interface RatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Rating({
  rating,
  onRatingChange,
  readOnly = false,
  size = "medium",
}: RatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    if (!readOnly && onRatingChange) {
      onRatingChange(value);
    }
  };

  const displayRating = hoverRating || rating;

  return (
    <div className={`rating rating-${size}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= displayRating ? "filled" : ""}`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => !readOnly && setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
        >
          ★
        </span>
      ))}
      {!readOnly && <span className="ratingValue">({displayRating}/5)</span>}
    </div>
  );
}
