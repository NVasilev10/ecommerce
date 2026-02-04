import React, { useState } from "react";
import "./dropdown.css";

interface DropdownOption {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  multiple?: boolean;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select...",
  disabled = false,
  clearable = false,
  searchable = false,
  multiple = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>(
    multiple && value ? (Array.isArray(value) ? value : [value]) : []
  );

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  const handleSelect = (optionValue: string | number) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue];
      setSelectedValues(newValues);
      onChange(newValues);
    } else {
      onChange(optionValue);
      setIsOpen(false);
      setSearchQuery("");
    }
  };

  const handleClear = () => {
    if (multiple) {
      setSelectedValues([]);
      onChange([]);
    } else {
      onChange("");
    }
  };

  const selectedLabel =
    multiple && selectedValues.length > 0
      ? `${selectedValues.length} selected`
      : options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className="dropdown-container">
      <button
        className={`dropdown-button ${isOpen ? "open" : ""} ${disabled ? "disabled" : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className="dropdown-label">{selectedLabel}</span>
        <span className="dropdown-arrow">▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {searchable && (
            <div className="dropdown-search">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dropdown-search-input"
                autoFocus
              />
            </div>
          )}

          <div className="dropdown-options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  className={`dropdown-option ${
                    multiple
                      ? selectedValues.includes(option.value)
                        ? "selected"
                        : ""
                      : value === option.value
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  {multiple && (
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(option.value)}
                      readOnly
                      className="dropdown-checkbox"
                    />
                  )}
                  {option.icon && <span className="dropdown-icon">{option.icon}</span>}
                  {option.label}
                </button>
              ))
            ) : (
              <div className="dropdown-empty">No options</div>
            )}
          </div>

          {clearable && (
            <div className="dropdown-footer">
              <button className="dropdown-clear-btn" onClick={handleClear}>
                Clear
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
