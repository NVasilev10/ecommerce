import React, { ReactNode } from "react";
import "./card.css";

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({
  children,
  title,
  subtitle,
  image,
  onClick,
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={`card ${hoverable ? "card-hoverable" : ""}`}
      onClick={onClick}
    >
      {image && <div className="card-image" style={{ backgroundImage: `url(${image})` }} />}
      {title && <h3 className="card-title">{title}</h3>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      <div className="card-content">{children}</div>
    </div>
  );
}
