import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./product-detail.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";

const allProducts = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    category: "women",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=800&h=800&fit=crop",
    description: "100% premium cotton t-shirt perfect for everyday wear. Soft, comfortable, and durable fabric with a modern fit.",
    rating: 4.8,
    reviews: 152,
    colors: ["White", "Black", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    sku: "TS-COTTON-001"
  },
  {
    id: 2,
    name: "Classic Blue Denim Jeans",
    category: "women",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=800&h=800&fit=crop",
    description: "Timeless blue denim jeans with perfect fit. Stretch fabric for comfort and durability. Perfect for any occasion.",
    rating: 4.6,
    reviews: 98,
    colors: ["Dark Blue", "Light Blue", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    sku: "JN-DENIM-001"
  },
  {
    id: 3,
    name: "Summer Dress Collection",
    category: "women",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1595777712802-32e486b34f3f?w=800&h=800&fit=crop",
    description: "Elegant summer dress perfect for warm days. Breathable fabric with stylish design.",
    rating: 4.9,
    reviews: 203,
    colors: ["White", "Blue", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    sku: "DS-SUMMER-001"
  },
  {
    id: 4,
    name: "Silk Blouse",
    category: "women",
    price: 85.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=800&fit=crop",
    description: "Luxurious silk blouse with elegant design. Perfect for professional or casual settings.",
    rating: 4.7,
    reviews: 67,
    colors: ["Cream", "Black", "Purple"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    sku: "BL-SILK-001"
  },
  {
    id: 7,
    name: "Classic Polo Shirt",
    category: "men",
    price: 55.99,
    image: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=800&h=800&fit=crop",
    description: "Classic polo shirt for men. Premium quality fabric with comfortable fit.",
    rating: 4.5,
    reviews: 89,
    colors: ["Black", "White", "Navy", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    sku: "PL-CLASSIC-001"
  },
  {
    id: 9,
    name: "Leather Jacket",
    category: "men",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=800&fit=crop",
    description: "Premium quality leather jacket. Perfect for a sophisticated look.",
    rating: 4.9,
    reviews: 145,
    colors: ["Black", "Brown"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    sku: "JK-LEATHER-001"
  },
  {
    id: 10,
    name: "Designer Handbag",
    category: "accessories",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop",
    description: "Stylish designer handbag with premium materials. Perfect accessory for any outfit.",
    rating: 4.8,
    reviews: 234,
    colors: ["Black", "Brown", "Burgundy"],
    sizes: ["One Size"],
    inStock: true,
    sku: "HB-DESIGNER-001"
  }
];

const customerReviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    title: "Amazing quality!",
    comment: "The product arrived quickly and the quality is excellent. Highly recommend!",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: 2,
    author: "Michael Brown",
    rating: 4,
    title: "Great value for money",
    comment: "Good product at a reasonable price. Delivery was fast.",
    date: "1 month ago",
    verified: true
  },
  {
    id: 3,
    author: "Emma Wilson",
    rating: 5,
    title: "Perfect fit!",
    comment: "Exactly as described. Fits perfectly and looks great. Will buy again!",
    date: "1.5 months ago",
    verified: true
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  const product = allProducts.find(p => p.id === Number(id));
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeTab, setActiveTab] = useState("reviews");

  if (!product) {
    return <div className="productDetailPage"><h1>Product not found</h1></div>;
  }

  const relatedProducts = allProducts.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        color: selectedColor,
        size: selectedSize,
      }
    });
    alert("Added to cart!");
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out ${product.name}!`;
    
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
    } else if (platform === "email") {
      shareUrl = `mailto:?subject=${encodeURIComponent(product.name)}&body=${encodeURIComponent(text + " " + url)}`;
    }
    
    if (shareUrl) window.open(shareUrl, "_blank");
  };

  return (
    <div className="productDetailPage">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</span>
        <span>/</span>
        <span onClick={() => navigate(`/${product.category}`)} style={{ cursor: "pointer" }}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </span>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="productContainer">
        {/* Product Images */}
        <div className="productImages">
          <div className="mainImage">
            <img src={product.image} alt={product.name} />
            <div className="badge">New</div>
          </div>
          <div className="thumbnails">
            <img src={product.image} alt="thumb1" />
            <img src={product.image} alt="thumb2" />
            <img src={product.image} alt="thumb3" />
          </div>
        </div>

        {/* Product Info */}
        <div className="productInfo">
          <h1>{product.name}</h1>
          
          <div className="ratingSection">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  style={{
                    color: i < Math.floor(product.rating) ? "#FFD700" : "#E0E0E0",
                    fontSize: "20px"
                  }}
                />
              ))}
            </div>
            <span className="ratingText">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="priceSection">
            <h2 className="price">${product.price}</h2>
            <span className="sku">SKU: {product.sku}</span>
          </div>

          <p className="description">{product.description}</p>

          {/* Color Selection */}
          <div className="optionGroup">
            <label>Color:</label>
            <div className="colorOptions">
              {product.colors.map(color => (
                <button
                  key={color}
                  className={`colorBtn ${selectedColor === color ? "active" : ""}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="optionGroup">
            <label>Size:</label>
            <div className="sizeOptions">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`sizeBtn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="optionGroup">
            <label>Quantity:</label>
            <div className="quantityControl">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Stock Status */}
          <div className={`stockStatus ${product.inStock ? "inStock" : "outOfStock"}`}>
            {product.inStock ? "✓ In Stock" : "Out of Stock"}
          </div>

          {/* Action Buttons */}
          <div className="actionButtons">
            <button className="addToCartBtn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className="wishlistBtn"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              {isWishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              Wishlist
            </button>
            <button className="shareBtn" onClick={() => setShowShareModal(!showShareModal)}>
              <ShareIcon />
              Share
            </button>
          </div>

          {/* Share Modal */}
          {showShareModal && (
            <div className="shareModal">
              <h4>Share Product</h4>
              <div className="shareButtons">
                <button onClick={() => handleShare("facebook")}>Facebook</button>
                <button onClick={() => handleShare("twitter")}>Twitter</button>
                <button onClick={() => handleShare("whatsapp")}>WhatsApp</button>
                <button onClick={() => handleShare("email")}>Email</button>
              </div>
            </div>
          )}

          {/* Shipping Info */}
          <div className="shippingInfo">
            <div className="shippingItem">
              <span>🚚</span>
              <div>
                <strong>Free Shipping</strong>
                <p>On orders over $100</p>
              </div>
            </div>
            <div className="shippingItem">
              <span>↩️</span>
              <div>
                <strong>Easy Returns</strong>
                <p>30-day return policy</p>
              </div>
            </div>
            <div className="shippingItem">
              <span>🛡️</span>
              <div>
                <strong>Secure Payment</strong>
                <p>100% secure transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabsSection">
        <div className="tabButtons">
          <button
            className={`tabBtn ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Customer Reviews ({product.reviews})
          </button>
          <button
            className={`tabBtn ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
        </div>

        <div className="tabContent">
          {activeTab === "reviews" && (
            <div className="reviewsSection">
              {customerReviews.map(review => (
                <div key={review.id} className="reviewCard">
                  <div className="reviewHeader">
                    <div className="authorInfo">
                      <strong>{review.author}</strong>
                      {review.verified && <span className="verified">✓ Verified Purchase</span>}
                    </div>
                    <span className="reviewDate">{review.date}</span>
                  </div>
                  <div className="reviewStars">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        style={{
                          color: i < review.rating ? "#FFD700" : "#E0E0E0",
                          fontSize: "16px"
                        }}
                      />
                    ))}
                  </div>
                  <h4>{review.title}</h4>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "details" && (
            <div className="detailsSection">
              <h3>Product Details</h3>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Product Name</strong></td>
                    <td>{product.name}</td>
                  </tr>
                  <tr>
                    <td><strong>SKU</strong></td>
                    <td>{product.sku}</td>
                  </tr>
                  <tr>
                    <td><strong>Category</strong></td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td><strong>Available Colors</strong></td>
                    <td>{product.colors.join(", ")}</td>
                  </tr>
                  <tr>
                    <td><strong>Available Sizes</strong></td>
                    <td>{product.sizes.join(", ")}</td>
                  </tr>
                  <tr>
                    <td><strong>Material</strong></td>
                    <td>Premium Quality Fabric</td>
                  </tr>
                  <tr>
                    <td><strong>Care</strong></td>
                    <td>Machine wash cold, tumble dry low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="relatedProducts">
          <h2>Related Products</h2>
          <div className="relatedGrid">
            {relatedProducts.map(p => (
              <div
                key={p.id}
                className="relatedCard"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <img src={p.image} alt={p.name} />
                <h4>{p.name}</h4>
                <p className="price">${p.price}</p>
                <div className="rating">
                  <span className="stars">★ {p.rating}</span>
                  <span className="reviews">({p.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
