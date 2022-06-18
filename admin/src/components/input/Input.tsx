import React from "react";
import "./input.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: string;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  error,
  required,
  disabled,
  icon,
}: InputProps) {
  return (
    <div className="inputGroup">
      {label && (
        <label className="inputLabel">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <div className="inputWrapper">
        {icon && <span className="inputIcon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`input ${error ? "input-error" : ""} ${icon ? "input-with-icon" : ""}`}
        />
      </div>
      {error && <span className="inputError">{error}</span>}
    </div>
  );
}
