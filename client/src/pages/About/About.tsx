import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutHero">
        <h1>About Us</h1>
        <p>Your Ultimate Destination for Fashion & Style</p>
      </div>

      <div className="aboutContainer">
        <section className="aboutSection">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, our e-commerce platform has grown to become a
            trusted destination for fashion enthusiasts worldwide. We believe
            that fashion is more than just clothing—it's a form of expression,
            confidence, and individuality.
          </p>
          <p>
            Our mission is to make high-quality fashion accessible to everyone,
            offering a curated selection of products from emerging designers and
            established brands alike.
          </p>
        </section>

        <section className="aboutSection">
          <h2>Our Values</h2>
          <div className="valuesGrid">
            <div className="valueCard">
              <h3>Quality</h3>
              <p>
                We carefully select products that meet our high standards for
                quality and durability.
              </p>
            </div>
            <div className="valueCard">
              <h3>Sustainability</h3>
              <p>
                We're committed to eco-friendly practices and supporting
                sustainable fashion brands.
              </p>
            </div>
            <div className="valueCard">
              <h3>Customer Service</h3>
              <p>
                Your satisfaction is our priority. We're here to help every step
                of your shopping journey.
              </p>
            </div>
            <div className="valueCard">
              <h3>Innovation</h3>
              <p>
                We continuously improve our platform to provide you with the best
                shopping experience.
              </p>
            </div>
          </div>
        </section>

        <section className="aboutSection">
          <h2>Why Choose Us?</h2>
          <ul className="reasonsList">
            <li>✓ Wide variety of fashion products and styles</li>
            <li>✓ Competitive prices and regular discounts</li>
            <li>✓ Fast and reliable shipping</li>
            <li>✓ Easy returns and exchanges</li>
            <li>✓ Secure payment options</li>
            <li>✓ Exceptional customer support</li>
          </ul>
        </section>

        <section className="aboutSection">
          <h2>Our Team</h2>
          <p>
            Our passionate team consists of fashion experts, designers, and
            customer service professionals dedicated to providing you with the
            best shopping experience. We're constantly working to bring you the
            latest trends and hottest fashion items.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
