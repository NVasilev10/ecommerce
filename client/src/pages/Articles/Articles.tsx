import { useState } from "react";
import { Link } from "react-router-dom";
import "./articles.css";

const ARTICLES = [
  {
    id: 1,
    title: "Best Summer Collections 2024",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=300&fit=crop",
    date: "Jan 10, 2024",
    excerpt: "Discover the hottest summer fashion trends including lightweight fabrics and vibrant colors perfect for the season...",
  },
  {
    id: 2,
    title: "How to Style Your Wardrobe",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=300&fit=crop",
    date: "Jan 5, 2024",
    excerpt: "Learn professional styling tips and tricks from fashion experts to make the most of your closet...",
  },
  {
    id: 3,
    title: "Winter Fashion Must-Haves",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=500&h=300&fit=crop",
    date: "Dec 28, 2023",
    excerpt: "Essential winter clothing items including coats, sweaters, and accessories to stay warm and stylish...",
  },
  {
    id: 4,
    title: "Denim Styles: From Classic to Contemporary",
    category: "Style Guide",
    image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=300&fit=crop",
    date: "Dec 20, 2023",
    excerpt: "Explore different denim styles - skinny, bootcut, wide-leg, and more - to find the perfect fit for you...",
  },
  {
    id: 5,
    title: "Accessory Guide: Elevate Your Look",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=300&fit=crop",
    date: "Dec 15, 2023",
    excerpt: "Discover how the right accessories can transform any outfit - bags, belts, jewelry, and scarves...",
  },
  {
    id: 6,
    title: "Sustainable Fashion: Eco-Friendly Choices",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1441984904556-0ac8d3d96e02?w=500&h=300&fit=crop",
    date: "Dec 10, 2023",
    excerpt: "Learn about sustainable and eco-friendly fashion options that look great and help the environment...",
  },
  {
    id: 7,
    title: "Footwear Trends: The Best Shoes This Season",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1549864386-e91cbb11fef2?w=500&h=300&fit=crop",
    date: "Dec 5, 2023",
    excerpt: "From sneakers to heels, discover the must-have footwear styles dominating fashion right now...",
  },
  {
    id: 8,
    title: "Casual vs Formal: Dress for Every Occasion",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1505695899930-b54b5d28bed1?w=500&h=300&fit=crop",
    date: "Nov 30, 2023",
    excerpt: "Master the art of dressing appropriately for any occasion with our comprehensive style guide...",
  },
  {
    id: 9,
    title: "Color Coordination: Creating Cohesive Outfits",
    category: "Style Guide",
    image: "https://images.unsplash.com/photo-1539533057440-7ce8588d221e?w=500&h=300&fit=crop",
    date: "Nov 25, 2023",
    excerpt: "Learn color theory and how to pair colors effectively to create stunning, harmonious outfits...",
  },
  {
    id: 10,
    title: "Designer Spotlight: Emerging Fashion Brands",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1523438097911-512782516f69?w=500&h=300&fit=crop",
    date: "Nov 20, 2023",
    excerpt: "Discover talented emerging designers creating innovative and unique pieces worth adding to your wardrobe...",
  },
  {
    id: 11,
    title: "Body Confidence: Fashion for Every Shape",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1488844191550-72b90e44d69b?w=500&h=300&fit=crop",
    date: "Nov 15, 2023",
    excerpt: "Find styles and fits that flatter your body type and boost your confidence with the right fashion choices...",
  },
  {
    id: 12,
    title: "Layering Techniques for Fashion and Function",
    category: "Style Guide",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979ddd37?w=500&h=300&fit=crop",
    date: "Nov 10, 2023",
    excerpt: "Master the art of layering to create versatile, stylish outfits that adapt to any weather...",
  },
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(ARTICLES.map((a) => a.category)))];

  const filtered =
    selectedCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="articlesPage">
      <div className="articlesHero">
        <h1>Blog & Articles</h1>
        <p>Discover fashion tips, trends, and lifestyle advice</p>
      </div>

      <div className="articlesContainer">
        <div className="articlesFilters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filterTag ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="articlesGrid">
          {filtered.map((article) => (
            <article key={article.id} className="articleCard">
              <img src={article.image} alt={article.title} />
              <div className="articleContent">
                <span className="articleCategory">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="articleFooter">
                  <span className="articleDate">{article.date}</span>
                  <Link to={`/article/${article.id}`} className="readMore">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
