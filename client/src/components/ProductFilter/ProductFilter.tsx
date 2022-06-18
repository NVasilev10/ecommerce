import { useState } from "react";
import "./productFilter.css";

interface ProductFilterProps {
  onFilterChange: (filters: any) => void;
  categories?: string[];
}

export default function ProductFilter({ onFilterChange, categories = [] }: ProductFilterProps) {
  const [filters, setFilters] = useState({
    category: "",
    priceMin: "",
    priceMax: "",
    sort: "newest",
  });

  const handleChange = (field: string, value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      category: "",
      priceMin: "",
      priceMax: "",
      sort: "newest",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="productFilterContainer">
      <h4>Filters</h4>

      <div className="filterGroupClient">
        <label>Category</label>
        <select
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filterGroupClient">
        <label>Price Range</label>
        <div className="priceRange">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceMin}
            onChange={(e) => handleChange("priceMin", e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceMax}
            onChange={(e) => handleChange("priceMax", e.target.value)}
          />
        </div>
      </div>

      <div className="filterGroupClient">
        <label>Sort By</label>
        <select
          value={filters.sort}
          onChange={(e) => handleChange("sort", e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <button onClick={handleReset} className="resetBtnClient">
        Clear Filters
      </button>
    </div>
  );
}
