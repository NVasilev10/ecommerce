import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./article-detail.css";

const ArticleDetail = () => {
  const { id } = useParams();

  const articles: any = {
    1: {
      title: "Best Summer Collections 2024",
      category: "Fashion",
      date: "Jan 10, 2024",
      author: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop",
      content: `
        Summer fashion is all about staying cool while looking hot. This season brings vibrant colors, lightweight fabrics, and styles that are perfect for warm weather. From breezy sundresses to breathable cotton shirts, we have everything you need to beat the heat while turning heads.
        
        Key trends this summer include:
        
        **Bright Colors & Pastels**: Move away from dark colors and embrace the vibrant tones of summer. Think coral, mint, sunny yellow, and sky blue.
        
        **Lightweight Fabrics**: Linen, cotton, and breathable blends are essential for summer comfort. These materials allow your skin to breathe while keeping you looking stylish.
        
        **Oversized Silhouettes**: Comfort is key. Oversized t-shirts, loose-fitting linen pants, and relaxed sundresses are perfect for casual summer days.
        
        **Accessories Matter**: Complete your summer look with wide-brimmed hats, sunglasses, and lightweight scarves. These accessories not only protect you from the sun but also add style to your outfit.
        
        **Footwear**: Sandals, flip-flops, and light sneakers are perfect for summer. Choose breathable options that won't make your feet sweat.
        
        Whether you're heading to the beach, attending a summer party, or just enjoying the warm weather, these summer fashion essentials will keep you comfortable and stylish throughout the season.
      `,
      relatedArticles: [2, 3, 4],
    },
    2: {
      title: "How to Style Your Wardrobe",
      category: "Tips",
      date: "Jan 5, 2024",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&h=600&fit=crop",
      content: `
        Styling your wardrobe doesn't have to be complicated. With a few simple tips and tricks, you can create stunning outfits from pieces you already own.
        
        **Start with Basics**: Every great wardrobe is built on quality basics. Invest in plain white t-shirts, neutral pants, and classic jeans.
        
        **Mix & Match**: Learn to combine different pieces to create multiple outfits. Neutral basics can be paired with colorful tops or accessories.
        
        **Understand Color Theory**: Learn which colors complement each other. Generally, colors that are opposite on the color wheel create striking combinations.
        
        **Invest in Quality**: Buy fewer items of better quality rather than many cheap items. Quality pieces last longer and look better.
        
        **Accessorize Wisely**: Accessories can completely transform an outfit. A simple dress can look totally different with different accessories.
        
        **Know Your Body Type**: Understand what styles flatter your body type. Don't just follow trends blindly; choose what works for you.
        
        **Keep It Simple**: Less is often more. A minimalist approach to fashion is timeless and elegant.
        
        Remember, the best style is the one that makes you feel confident and comfortable!
      `,
      relatedArticles: [1, 3, 9],
    },
    3: {
      title: "Winter Fashion Must-Haves",
      category: "Fashion",
      date: "Dec 28, 2023",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=1200&h=600&fit=crop",
      content: `
        Winter fashion is about layering, quality fabrics, and smart styling to stay warm without sacrificing style. Here are the must-have items for every winter wardrobe.
        
        **The Winter Coat**: A quality winter coat is non-negotiable. Choose one that fits well and works with your everyday style.
        
        **Sweaters & Knitwear**: Invest in a variety of sweaters in different weights and styles. Chunky knits, turtlenecks, and cardigans are winter staples.
        
        **Thermal Layers**: Thermal leggings and long-sleeve base layers keep you warm while staying hidden under your clothes.
        
        **Boots**: Winter boots are both functional and fashionable. Look for quality leather or water-resistant boots that can handle snow and salt.
        
        **Accessories**: Scarves, gloves, hats, and warm socks are essential for winter comfort and style. Choose colors that complement your winter wardrobe.
        
        **Dark Colors**: Winter is the perfect season for dark, moody colors like black, navy, burgundy, and forest green.
        
        **Quality Fabrics**: Wool, cashmere, and high-quality synthetics are perfect for winter. They provide warmth and durability.
        
        With these essential items, you'll be prepared to face the cold while looking absolutely fabulous!
      `,
      relatedArticles: [1, 4, 6],
    },
    4: {
      title: "Denim Styles: From Classic to Contemporary",
      category: "Style Guide",
      date: "Dec 20, 2023",
      author: "Jessica Lee",
      image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=1200&h=600&fit=crop",
      content: `
        Denim is a timeless fabric that never goes out of style. Whether you prefer classic cuts or contemporary styles, there's a denim fit for everyone.
        
        **Skinny Jeans**: Fitted through the leg, skinny jeans create a sleek silhouette. Perfect with heels or flats.
        
        **Bootcut Jeans**: With a slight flare at the ankle, bootcut jeans work well with boots and provide a balanced silhouette.
        
        **Straight Leg Jeans**: A classic cut that works for almost everyone. Versatile and timeless.
        
        **Flared & Bell Bottoms**: A retro style that's made a comeback. Perfect for creating a vintage-inspired look.
        
        **Wide Leg Jeans**: Comfortable and trendy, wide-leg jeans offer a modern take on classic denim.
        
        **Mom Jeans**: High-waisted and relaxed through the thigh, mom jeans are comfortable and flattering.
        
        **Boyfriend Jeans**: Oversized and relaxed, boyfriend jeans are perfect for a casual, comfortable look.
        
        **Jegging**: Part jeans, part legging, jeggings offer comfort with the look of denim.
        
        **Choosing the Right Fit**: The most important thing is to find a fit that makes you feel confident. Try on different styles and choose what works for your body type and personal style.
      `,
      relatedArticles: [1, 5, 7],
    },
    5: {
      title: "Accessory Guide: Elevate Your Look",
      category: "Accessories",
      date: "Dec 15, 2023",
      author: "David Kumar",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=600&fit=crop",
      content: `
        Accessories are the secret weapons of great style. A simple outfit can be transformed with the right accessories. Here's your guide to elevating your look.
        
        **Handbags**: Invest in a few quality bags in neutral colors. A tote, a crossbody, and a small clutch will cover most occasions.
        
        **Jewelry**: Mix metals and styles. Layering delicate gold and silver pieces creates an interesting look.
        
        **Belts**: A quality belt can cinch your waist, define your silhouette, and add interest to plain outfits.
        
        **Scarves**: Scarves are incredibly versatile. Wear them around your neck, as a headwrap, or tied to your bag.
        
        **Sunglasses**: Quality sunglasses protect your eyes and add instant style to any outfit.
        
        **Hats**: From baseball caps to wide-brimmed hats, headwear adds personality to your look.
        
        **Shoes**: The right shoes can completely change an outfit. Build a collection of styles for different occasions.
        
        **Watches**: A quality watch is both functional and stylish.
        
        **Key Rule**: Choose accessories that complement your personal style and the occasion. Quality over quantity always wins!
      `,
      relatedArticles: [2, 3, 9],
    },
  };

  const article = articles[id as string] || articles[1];

  const [liked, setLiked] = useState(false);

  return (
    <div className="articleDetail">
      <div
        className="articleHeroImage"
        style={{ backgroundImage: `url(${article.image})` }}
      />

      <div className="articleContainer">
        <div className="articleHeader">
          <h1>{article.title}</h1>
          <div className="articleMeta">
            <span className="category">{article.category}</span>
            <span className="date">📅 {article.date}</span>
            <span className="author">✍️ By {article.author}</span>
          </div>
        </div>

        <div className="articleBody">
          <div className="content">
            {article.content.split("\n\n").map((paragraph: string, index: number) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="sidebar">
            <div className="shareBox">
              <h3>Share This Article</h3>
              <div className="shareButtons">
                <button className="shareBtn facebook">f</button>
                <button className="shareBtn twitter">𝕏</button>
                <button className="shareBtn linkedin">in</button>
                <button className="shareBtn email">✉️</button>
              </div>
            </div>

            <div className="likeBox">
              <button
                className={`likeBtn ${liked ? "liked" : ""}`}
                onClick={() => setLiked(!liked)}
              >
                {liked ? "❤️ Liked" : "🤍 Like This"}
              </button>
            </div>

            <div className="relatedBox">
              <h3>Related Articles</h3>
              <ul>
                {article.relatedArticles.map((relId: number) => (
                  <li key={relId}>
                    <a href={`/article/${relId}`}>→ Article {relId}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
