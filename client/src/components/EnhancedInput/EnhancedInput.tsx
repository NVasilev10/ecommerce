import React, { useState } from "react";
import "./enhancedInput.css";

interface EnhancedInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  clearable?: boolean;
  maxLength?: number;
  hint?: string;
  validation?: (value: string) => boolean;
}

export default function EnhancedInput({
  type = "text",
  placeholder,
  value = "",
  onChange,
  onFocus,
  onBlur,
  label,
  error,
  required,
  disabled,
  icon,
  clearable = false,
  maxLength,
  hint,
  validation,
}: EnhancedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validation) {
      setIsValid(validation(e.target.value));
    }
    onChange?.(e);
  };

  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className="enhanced-input-group">
      {label && (
        <label className="enhanced-input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <div className={`enhanced-input-wrapper ${isFocused ? "focused" : ""} ${error ? "error" : ""}`}>
        {icon && <span className="enhanced-input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          maxLength={maxLength}
          className={`enhanced-input ${icon ? "with-icon" : ""} ${clearable && value ? "with-clear" : ""}`}
        />
        {clearable && value && (
          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
        {maxLength && (
          <span className="char-count">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      {hint && !error && <span className="enhanced-input-hint">{hint}</span>}
      {error && <span className="enhanced-input-error">{error}</span>}
      {validation && !error && !isValid && (
        <span className="enhanced-input-error">Invalid input</span>
      )}
    </div>
  );
}
