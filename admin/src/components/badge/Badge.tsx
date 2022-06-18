import React from "react";
import "./badge.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

export default function Badge({ children, variant = "primary" }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
