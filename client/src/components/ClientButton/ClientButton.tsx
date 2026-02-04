import React, { useState } from "react";
import "./clientButton.css";

interface ClientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  loading?: boolean;
  tooltip?: string;
  icon?: React.ReactNode;
}

export default function ClientButton({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  onClick,
  disabled = false,
  loading = false,
  tooltip,
  icon,
}: ClientButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = async () => {
    if (onClick && !isLoading && !disabled) {
      setIsLoading(true);
      try {
        await onClick();
      } catch (error) {
        console.error("Button action error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="btn-wrapper" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <button
        className={`clientBtn clientBtn-${variant} clientBtn-${size} ${
          fullWidth ? "clientBtn-full" : ""
        } ${isLoading || loading ? "clientBtn-loading" : ""}`}
        onClick={handleClick}
        disabled={disabled || isLoading || loading}
      >
        {isLoading || loading ? (
          <>
            <span className="btn-spinner"></span>
            Loading...
          </>
        ) : (
          <>
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
          </>
        )}
      </button>
      {tooltip && showTooltip && <div className="btn-tooltip">{tooltip}</div>}
    </div>
  );
}
