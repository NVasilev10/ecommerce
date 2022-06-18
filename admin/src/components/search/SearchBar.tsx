import { useState } from "react";
import "./searchBar.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search..." }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="searchInput"
      />
      {query && (
        <button onClick={handleClear} className="clearBtn">
          ✕
        </button>
      )}
      <span className="searchIcon">🔍</span>
    </div>
  );
}
