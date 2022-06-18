import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all items. Products must be unused and in original packaging. Simply contact our customer service for a return authorization.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. Shipping times may vary based on your location.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You'll see the shipping cost at checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive an email with a tracking number. You can use this number to track your package on the carrier's website.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use industry-standard SSL encryption and PCI compliance to protect your payment information. Your data is always secure.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "If your order hasn't shipped yet, you can cancel it free of charge. Contact us within 24 hours of placing your order to cancel.",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes! Sign up for our newsletter and earn points on every purchase. Points can be redeemed for discounts on future orders.",
    },
    {
      question: "How do I use a coupon code?",
      answer:
        "During checkout, you'll see a 'Promo Code' field. Enter your coupon code there and the discount will be applied to your total.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for your convenience.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@fashionstore.com or call +1 (555) 123-4567. We're available Monday-Friday, 9 AM-6 PM.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqPage">
      <div className="faqHero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our service</p>
      </div>

      <div className="faqContainer">
        <div className="faqContent">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faqItem ${openIndex === index ? "active" : ""}`}
            >
              <button
                className="faqQuestion"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faqIcon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faqAnswer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faqSidebar">
          <div className="faqCard">
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Please contact our customer support team.</p>
            <a href="/contact" className="ctaBtn">
              Contact Us
            </a>
          </div>

          <div className="faqCard">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/articles">Blog & Articles</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/">Shop Now</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
