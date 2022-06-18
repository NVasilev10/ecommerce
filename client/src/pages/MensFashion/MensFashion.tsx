import React, { useState } from "react";
import "./category.css";

const MensFashion = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [priceRange, setPriceRange] = useState([0, 250]);

  const products = [
    {
      id: 1,
      name: "Classic Polo Shirt",
      price: 55.99,
      image: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL", "XXL"],
      color: "Navy Blue",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 75.99,
      image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop",
      sizes: ["28", "30", "32", "34", "36"],
      color: "Dark Blue",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL"],
      color: "Black",
    },
    {
      id: 4,
      name: "Casual Chino Pants",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
      sizes: ["28", "30", "32", "34", "36"],
      color: "Khaki",
    },
    {
      id: 5,
      name: "Wool Blazer",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL"],
      color: "Gray",
    },
    {
      id: 6,
      name: "Leather Sneakers",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1549864386-e91cbb11fef2?w=400&h=400&fit=crop",
      sizes: ["7", "8", "9", "10", "11", "12"],
      color: "White",
    },
    {
      id: 7,
      name: "Athletic T-Shirt",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL", "XXL"],
      color: "Black",
    },
    {
      id: 8,
      name: "Denim Jacket",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1591033127327-42a592db8d81?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL"],
      color: "Blue",
    },
  ];

  const filteredProducts = products.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <div className="categoryPage">
      <div className="categoryHero">
        <h1>👔 Men's Fashion Collection</h1>
        <p>Premium men's clothing for every occasion</p>
      </div>

      <div className="categoryContainer">
        <aside className="filterSidebar">
          <h3>Filters</h3>

          <div className="filterGroup">
            <h4>Price Range</h4>
            <div className="priceFilter">
              <input
                type="range"
                min="0"
                max="300"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              />
              <p>${priceRange[0]} - ${priceRange[1]}</p>
            </div>
          </div>

          <div className="filterGroup">
            <h4>Size</h4>
            <div className="sizeOptions">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={`sizeBtn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(selectedSize === size ? "" : size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="filterGroup">
            <h4>Colors</h4>
            <div className="colorOptions">
              {["Black", "White", "Navy", "Gray", "Brown"].map((color) => (
                <div key={color} className="colorOption">
                  <label>
                    <input type="checkbox" />
                    <span>{color}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="productsGrid">
          <div className="gridHeader">
            <h2>Products ({filteredProducts.length})</h2>
            <select className="sortSelect">
              <option>Sort By: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>

          <div className="productGrid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="productCard">
                <div className="productImage">
                  <img src={product.image} alt={product.name} />
                  <span className="badge">NEW</span>
                </div>
                <div className="productInfo">
                  <h3>{product.name}</h3>
                  <p className="color">{product.color}</p>
                  <div className="productFooter">
                    <span className="price">${product.price}</span>
                    <button className="addBtn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MensFashion;
