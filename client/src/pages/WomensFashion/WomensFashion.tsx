import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./category.css";

const WomensFashion = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=400&h=400&fit=crop",
      sizes: ["XS", "S", "M", "L", "XL"],
      color: "White",
    },
    {
      id: 2,
      name: "Classic Blue Denim Jeans",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop",
      sizes: ["24", "25", "26", "27", "28"],
      color: "Blue",
    },
    {
      id: 3,
      name: "Summer Dress Collection",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1595777712802-32e486b34f3f?w=400&h=400&fit=crop",
      sizes: ["XS", "S", "M", "L"],
      color: "Floral",
    },
    {
      id: 4,
      name: "Silk Blouse",
      price: 85.99,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
      sizes: ["XS", "S", "M", "L", "XL"],
      color: "Burgundy",
    },
    {
      id: 5,
      name: "Wool Winter Coat",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=400&h=400&fit=crop",
      sizes: ["XS", "S", "M", "L", "XL"],
      color: "Black",
    },
    {
      id: 6,
      name: "Casual Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1549864386-e91cbb11fef2?w=400&h=400&fit=crop",
      sizes: ["5", "6", "7", "8", "9", "10"],
      color: "White",
    },
    {
      id: 7,
      name: "Sport Activewear Set",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      sizes: ["XS", "S", "M", "L"],
      color: "Pink",
    },
    {
      id: 8,
      name: "Vintage Denim Shorts",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1591033127327-42a592db8d81?w=400&h=400&fit=crop",
      sizes: ["XS", "S", "M", "L", "XL"],
      color: "Denim",
    },
  ];

  const filteredProducts = products.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <div className="categoryPage">
      <div className="categoryHero">
        <h1>👗 Women's Fashion Collection</h1>
        <p>Discover the latest trends in women's fashion</p>
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
              {["XS", "S", "M", "L", "XL"].map((size) => (
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
              {["Black", "White", "Blue", "Red", "Pink"].map((color) => (
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
              <div
                key={product.id}
                className="productCard"
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="productImage">
                  <img src={product.image} alt={product.name} />
                  <span className="badge">NEW</span>
                </div>
                <div className="productInfo">
                  <h3>{product.name}</h3>
                  <p className="color">{product.color}</p>
                  <div className="productFooter">
                    <span className="price">${product.price}</span>
                    <button className="addBtn" onClick={(e) => { e.stopPropagation(); }}>
                      View Product
                    </button>
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

export default WomensFashion;
