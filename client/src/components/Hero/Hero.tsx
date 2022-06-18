import React from "react";
import "./hero.css";

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, image, children }: HeroProps) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
      }}
    >
      <div className="heroOverlay"></div>
      <div className="heroContent">
        <h1 className="heroTitle">{title}</h1>
        <p className="heroSubtitle">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}
