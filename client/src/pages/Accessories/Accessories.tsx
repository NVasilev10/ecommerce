import React, { useState } from "react";
import "./category.css";

const Accessories = () => {
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);

  const products = [
    {
      id: 1,
      name: "Designer Handbag",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      type: "Bags",
      color: "Black",
    },
    {
      id: 2,
      name: "Leather Wallet",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1534194519324-a9fb06d6aebb?w=400&h=400&fit=crop",
      type: "Wallets",
      color: "Brown",
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      type: "Jewelry",
      color: "Gold",
    },
    {
      id: 4,
      name: "Silk Scarf",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      type: "Scarves",
      color: "Multicolor",
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      type: "Eyewear",
      color: "Black",
    },
    {
      id: 6,
      name: "Wide Brim Hat",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1593033127327-42a592db8d81?w=400&h=400&fit=crop",
      type: "Hats",
      color: "Beige",
    },
    {
      id: 7,
      name: "Pearl Earrings",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      type: "Jewelry",
      color: "White",
    },
    {
      id: 8,
      name: "Leather Belt",
      price: 55.99,
      image: "https://images.unsplash.com/photo-1591033127327-42a592db8d81?w=400&h=400&fit=crop",
      type: "Belts",
      color: "Black",
    },
  ];

  const filteredProducts = products.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <div className="categoryPage">
      <div className="categoryHero">
        <h1>✨ Accessories Collection</h1>
        <p>Complete your look with our premium accessories</p>
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
                max="250"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              />
              <p>${priceRange[0]} - ${priceRange[1]}</p>
            </div>
          </div>

          <div className="filterGroup">
            <h4>Type</h4>
            <div className="typeOptions">
              {["Bags", "Jewelry", "Hats", "Scarves", "Belts"].map((type) => (
                <button
                  key={type}
                  className={`typeBtn ${selectedType === type ? "active" : ""}`}
                  onClick={() => setSelectedType(selectedType === type ? "" : type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="filterGroup">
            <h4>Materials</h4>
            <div className="colorOptions">
              {["Leather", "Silk", "Gold", "Silver", "Pearl"].map((material) => (
                <div key={material} className="colorOption">
                  <label>
                    <input type="checkbox" />
                    <span>{material}</span>
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
                  <p className="color">{product.type}</p>
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

export default Accessories;
