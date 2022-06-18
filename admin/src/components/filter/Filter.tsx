import { useState } from "react";
import "./filter.css";

interface FilterProps {
  onFilterChange: (filters: any) => void;
  filterType?: "users" | "products";
}

export default function Filter({ onFilterChange, filterType = "users" }: FilterProps) {
  const [filters, setFilters] = useState({
    status: "",
    dateFrom: "",
    dateTo: "",
    priceMin: "",
    priceMax: "",
  });

  const handleChange = (field: string, value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      status: "",
      dateFrom: "",
      dateTo: "",
      priceMin: "",
      priceMax: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="filterContainer">
      <h4>Filters</h4>
      
      {filterType === "users" && (
        <>
          <div className="filterGroup">
            <label>Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleChange("status", e.target.value)}
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="filterGroup">
            <label>Joined From</label>
            <input
              type="date"
              value={filters.dateFrom}
              onChange={(e) => handleChange("dateFrom", e.target.value)}
            />
          </div>

          <div className="filterGroup">
            <label>Joined To</label>
            <input
              type="date"
              value={filters.dateTo}
              onChange={(e) => handleChange("dateTo", e.target.value)}
            />
          </div>
        </>
      )}

      {filterType === "products" && (
        <>
          <div className="filterGroup">
            <label>Min Price</label>
            <input
              type="number"
              value={filters.priceMin}
              onChange={(e) => handleChange("priceMin", e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="filterGroup">
            <label>Max Price</label>
            <input
              type="number"
              value={filters.priceMax}
              onChange={(e) => handleChange("priceMax", e.target.value)}
              placeholder="1000"
            />
          </div>

          <div className="filterGroup">
            <label>Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleChange("status", e.target.value)}
            >
              <option value="">All</option>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
        </>
      )}

      <button onClick={handleReset} className="resetBtn">
        Reset Filters
      </button>
    </div>
  );
}
