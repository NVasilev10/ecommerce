import React from "react";
import "./testimonials.css";
import StarIcon from "@mui/icons-material/Star";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jessica Parker",
      role: "Fashion Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5,
      comment: "Absolutely love this store! The quality is amazing and the shipping is super fast. Will definitely shop here again!",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Style Blogger",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      comment: "Best online shopping experience. Great customer service and the products are exactly as described.",
      verified: true,
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Fashion Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 4.5,
      comment: "Love the variety and trendy designs. The prices are reasonable and the quality is top-notch.",
      verified: true,
    },
    {
      id: 4,
      name: "David Johnson",
      role: "Lifestyle Influencer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      comment: "Finally found a place with all the latest fashion trends! Highly recommended!",
      verified: true,
    },
  ];

  return (
    <div className="testimonialsSection">
      <div className="testimonialsContainer">
        <div className="sectionHeader">
          <h2>What Our Customers Say</h2>
          <p>Real reviews from real customers who love our products</p>
        </div>

        <div className="testimonialsGrid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonialCard">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    style={{
                      color: i < Math.floor(testimonial.rating) ? "#FFD700" : "#E0E0E0",
                      fontSize: "18px",
                    }}
                  />
                ))}
              </div>

              <p className="comment">"{testimonial.comment}"</p>

              <div className="authorInfo">
                <img src={testimonial.image} alt={testimonial.name} className="avatar" />
                <div className="authorDetails">
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                  {testimonial.verified && (
                    <span className="verified">✓ Verified Purchase</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
