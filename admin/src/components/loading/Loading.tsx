import React from "react";
import "./loading.css";

interface LoadingProps {
  size?: "small" | "medium" | "large";
  fullPage?: boolean;
}

export default function Loading({ size = "medium", fullPage = false }: LoadingProps) {
  return (
    <div className={`loading ${fullPage ? "loading-fullpage" : ""} loading-${size}`}>
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
