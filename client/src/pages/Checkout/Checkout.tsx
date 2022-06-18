import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./checkout.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cart?.products || []);
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review, 4: Success
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const subtotal = cartItems.reduce(
    (total: number, item: any) => total + item.price * (item.quantity || 1),
    0
  );
  const shipping = subtotal > 100 ? 0 : 15.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep1 = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zipCode
    );
  };

  const validateStep2 = () => {
    return (
      paymentData.cardName &&
      paymentData.cardNumber?.length === 16 &&
      paymentData.expiryDate &&
      paymentData.cvv?.length === 3
    );
  };

  const handleProceed = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else {
      alert("Please fill in all required fields correctly!");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkoutContainer">
        <div className="emptyCart">
          <h1>Your cart is empty</h1>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkoutContainer">
      <div className="checkoutWrapper">
        {/* Progress Steps */}
        <div className="progressSteps">
          <div className={`step ${step >= 1 ? "active" : ""}`}>
            <div className="stepNumber">1</div>
            <span>Shipping</span>
          </div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>
            <div className="stepNumber">2</div>
            <span>Payment</span>
          </div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>
            <div className="stepNumber">3</div>
            <span>Review</span>
          </div>
          <div className={`step ${step >= 4 ? "active" : ""}`}>
            <div className="stepNumber">✓</div>
            <span>Complete</span>
          </div>
        </div>

        <div className="checkoutContent">
          {/* Left Column - Form */}
          <div className="checkoutForm">
            {step === 1 && (
              <div className="formStep">
                <h2>Shipping Address</h2>
                <div className="formRow">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <div className="formRow">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formRow">
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                  <select name="country" value={formData.country} onChange={handleInputChange}>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>UK</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="formStep">
                <h2>Payment Information</h2>
                <input
                  type="text"
                  name="cardName"
                  placeholder="Name on Card"
                  value={paymentData.cardName}
                  onChange={handlePaymentChange}
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number (16 digits)"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentChange}
                  maxLength={16}
                />
                <div className="formRow">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentData.expiryDate}
                    onChange={handlePaymentChange}
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV (3 digits)"
                    value={paymentData.cvv}
                    onChange={handlePaymentChange}
                    maxLength={3}
                  />
                </div>
                <div className="paymentMethods">
                  <label className="methodOption">
                    <input type="radio" name="payment" defaultChecked />
                    <span>💳 Credit/Debit Card</span>
                  </label>
                  <label className="methodOption">
                    <input type="radio" name="payment" />
                    <span>🏦 Bank Transfer</span>
                  </label>
                  <label className="methodOption">
                    <input type="radio" name="payment" />
                    <span>💰 PayPal</span>
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="formStep">
                <h2>Review Your Order</h2>
                <div className="reviewSection">
                  <div className="reviewBox">
                    <h4>📍 Shipping Address</h4>
                    <p>{formData.firstName} {formData.lastName}</p>
                    <p>{formData.address}</p>
                    <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                    <p>✉️ {formData.email}</p>
                    <p>📱 {formData.phone}</p>
                  </div>
                  <div className="reviewBox">
                    <h4>💳 Payment Method</h4>
                    <p>Card ending in: {paymentData.cardNumber.slice(-4).padStart(paymentData.cardNumber.length, '*')}</p>
                  </div>
                  <div className="reviewBox">
                    <h4>📦 Items ({cartItems.length})</h4>
                    {cartItems.map((item: any) => (
                      <div key={item.id} className="reviewItem">
                        <span>{item.name} x{item.quantity || 1}</span>
                        <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="successSection">
                <CheckCircleIcon style={{ fontSize: 80, color: "#2e7d32", marginBottom: 20 }} />
                <h2>Order Confirmed! 🎉</h2>
                <p>Thank you for your purchase!</p>
                <div className="successDetails">
                  <p><strong>Order Number:</strong> #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  <p><strong>Total Amount:</strong> ${total.toFixed(2)}</p>
                  <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
                </div>
                <p className="successMessage">
                  A confirmation email has been sent to {formData.email}
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="orderSummary">
            <h3>Order Summary</h3>
            <div className="summaryItems">
              {cartItems.map((item: any) => (
                <div key={item.id} className="summaryItem">
                  <img src={item.image} alt={item.name} />
                  <div className="itemDetails">
                    <p>{item.name}</p>
                    <span>x{item.quantity || 1}</span>
                  </div>
                  <span className="itemPrice">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summaryCalculation">
              <div className="calcRow">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="calcRow">
                <span>Shipping:</span>
                <span className={shipping === 0 ? "free" : ""}>
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="calcRow">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="divider"></div>
              <div className="calcRow total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {step !== 4 && (
              <div className="buttonGroup">
                {step > 1 && (
                  <button className="backBtn" onClick={() => setStep(step - 1)}>
                    ← Back
                  </button>
                )}
                <button className="continueBtn" onClick={handleProceed}>
                  {step === 3 ? "Place Order" : "Continue"}
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="buttonGroup">
                <button className="continueBtn" onClick={() => navigate("/")}>
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
