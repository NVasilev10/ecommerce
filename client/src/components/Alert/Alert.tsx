import React from "react";
import "./alert.css";

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  onClose?: () => void;
}

export default function Alert({ type, title, message, onClose }: AlertProps) {
  return (
    <div className={`alert alert-${type}`}>
      <div className="alertContent">
        <h4 className="alertTitle">{title}</h4>
        <p className="alertMessage">{message}</p>
      </div>
      {onClose && (
        <button className="alertClose" onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
}
