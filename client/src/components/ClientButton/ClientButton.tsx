import React from "react";
import "./clientButton.css";

interface ClientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export default function ClientButton({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  onClick,
  disabled = false,
}: ClientButtonProps) {
  return (
    <button
      className={`clientBtn clientBtn-${variant} clientBtn-${size} ${
        fullWidth ? "clientBtn-full" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
