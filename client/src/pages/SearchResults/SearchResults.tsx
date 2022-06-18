import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "./search-results.css";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<{ products: Product[]; articles: Article[] }>({ products: [], articles: [] });
  const [selectedType, setSelectedType] = useState("all");

  // All products data
  const allProducts = [
    { id: 1, name: "Premium Cotton T-Shirt", category: "women", price: 45.99, image: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=400&h=400&fit=crop" },
    { id: 2, name: "Classic Blue Denim Jeans", category: "women", price: 79.99, image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop" },
    { id: 3, name: "Summer Dress Collection", category: "women", price: 65.99, image: "https://images.unsplash.com/photo-1595777712802-32e486b34f3f?w=400&h=400&fit=crop" },
    { id: 4, name: "Silk Blouse", category: "women", price: 85.99, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop" },
    { id: 5, name: "Wool Winter Coat", category: "women", price: 249.99, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=400&h=400&fit=crop" },
    { id: 6, name: "Casual Sneakers", category: "women", price: 89.99, image: "https://images.unsplash.com/photo-1549864386-e91cbb11fef2?w=400&h=400&fit=crop" },
    { id: 7, name: "Classic Polo Shirt", category: "men", price: 55.99, image: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=400&h=400&fit=crop" },
    { id: 8, name: "Slim Fit Jeans", category: "men", price: 75.99, image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop" },
    { id: 9, name: "Leather Jacket", category: "men", price: 199.99, image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=400&fit=crop" },
    { id: 10, name: "Designer Handbag", category: "accessories", price: 159.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop" },
    { id: 11, name: "Sunglasses", category: "accessories", price: 99.99, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop" },
    { id: 12, name: "Leather Belt", category: "accessories", price: 55.99, image: "https://images.unsplash.com/photo-1591033127327-42a592db8d81?w=400&h=400&fit=crop" },
  ];

  // All articles data
  const allArticles = [
    { id: 1, title: "Best Summer Collections 2024", category: "Fashion", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=300&fit=crop" },
    { id: 2, title: "How to Style Your Wardrobe", category: "Tips", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=300&fit=crop" },
    { id: 3, title: "Winter Fashion Must-Haves", category: "Fashion", image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=500&h=300&fit=crop" },
    { id: 4, title: "Denim Styles: From Classic to Contemporary", category: "Style Guide", image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=300&fit=crop" },
    { id: 5, title: "Accessory Guide: Elevate Your Look", category: "Accessories", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=300&fit=crop" },
    { id: 6, title: "Sustainable Fashion: Eco-Friendly Choices", category: "Trends", image: "https://images.unsplash.com/photo-1441984904556-0ac8d3d96e02?w=500&h=300&fit=crop" },
  ];

  useEffect(() => {
    if (!query) {
      setResults({ products: [], articles: [] });
      return;
    }

    const lowerQuery = query.toLowerCase();

    const matchedProducts = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );

    const matchedArticles = allArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(lowerQuery) ||
        a.category.toLowerCase().includes(lowerQuery)
    );

    setResults({ products: matchedProducts, articles: matchedArticles });
  }, [query]);

  const displayProducts =
    selectedType === "all" || selectedType === "products"
      ? results.products
      : [];
  const displayArticles =
    selectedType === "all" || selectedType === "articles"
      ? results.articles
      : [];

  return (
    <div className="searchResultsPage">
      <div className="searchHero">
        <h1>Search Results</h1>
        <p>Found {displayProducts.length + displayArticles.length} results for "{query}"</p>
      </div>

      <div className="searchContainer">
        <div className="filterTabs">
          <button
            className={`tab ${selectedType === "all" ? "active" : ""}`}
            onClick={() => setSelectedType("all")}
          >
            All ({results.products.length + results.articles.length})
          </button>
          <button
            className={`tab ${selectedType === "products" ? "active" : ""}`}
            onClick={() => setSelectedType("products")}
          >
            Products ({results.products.length})
          </button>
          <button
            className={`tab ${selectedType === "articles" ? "active" : ""}`}
            onClick={() => setSelectedType("articles")}
          >
            Articles ({results.articles.length})
          </button>
        </div>

        {displayProducts.length === 0 && displayArticles.length === 0 ? (
          <div className="noResults">
            <p>No results found for "{query}"</p>
            <Link to="/" className="backLink">
              ← Back to Home
            </Link>
          </div>
        ) : (
          <>
            {displayProducts.length > 0 && (
              <div className="resultsSection">
                <h2>🛍️ Products</h2>
                <div className="productGrid">
                  {displayProducts.map((product) => (
                    <div key={product.id} className="resultCard productCard">
                      <img src={product.image} alt={product.name} />
                      <div className="cardInfo">
                        <h3>{product.name}</h3>
                        <p className="category">{product.category}</p>
                        <p className="price">${product.price}</p>
                        <button className="viewBtn">View Product</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {displayArticles.length > 0 && (
              <div className="resultsSection">
                <h2>📰 Articles & Blog</h2>
                <div className="articleGrid">
                  {displayArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="resultCard articleCard"
                    >
                      <img src={article.image} alt={article.title} />
                      <div className="cardInfo">
                        <h3>{article.title}</h3>
                        <span className="category">{article.category}</span>
                        <p className="readMore">Read Article →</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
