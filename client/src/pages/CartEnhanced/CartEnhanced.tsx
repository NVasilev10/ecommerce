import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./cart-enhanced.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartEnhanced = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart?.products || []);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const calculateSubtotal = () => {
    return cartItems.reduce((total: number, item: any) => {
      return total + (item.price * (item.quantity || 1));
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 100 ? 0 : 15.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax - discount;

  const handleRemoveItem = (id: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(id);
    } else {
      dispatch({
        type: "UPDATE_CART_QUANTITY",
        payload: { id, quantity },
      });
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(subtotal * 0.1);
      setPromoApplied(true);
    } else if (promoCode.toLowerCase() === "save20") {
      setDiscount(subtotal * 0.2);
      setPromoApplied(true);
    } else {
      alert("Invalid promo code!");
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cartContainer">
        <div className="emptyCart">
          <h1>🛒 Your Cart is Empty</h1>
          <p>Start shopping to add items to your cart!</p>
          <button onClick={() => navigate("/")} className="continueShopping">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <h1 className="cartTitle">Shopping Cart</h1>

      <div className="cartContent">
        <div className="cartItems">
          <div className="itemsHeader">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Action</span>
          </div>

          {cartItems.map((item: any) => (
            <div key={item.id} className="cartItem">
              <div className="productInfo">
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h4>{item.name}</h4>
                  {item.color && <p className="detail">Color: {item.color}</p>}
                  {item.size && <p className="detail">Size: {item.size}</p>}
                </div>
              </div>

              <div className="price">${item.price.toFixed(2)}</div>

              <div className="quantity">
                <button onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}>
                  <RemoveIcon fontSize="small" />
                </button>
                <span>{item.quantity || 1}</span>
                <button onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}>
                  <AddIcon fontSize="small" />
                </button>
              </div>

              <div className="itemTotal">
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </div>

              <button
                className="removeBtn"
                onClick={() => handleRemoveItem(item.id)}
              >
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          ))}
        </div>

        <div className="cartSummary">
          <h2>Order Summary</h2>

          <div className="summaryItem">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summaryItem">
            <span>Shipping:</span>
            <span className={shipping === 0 ? "free" : ""}>
              {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
            </span>
          </div>

          {shipping === 0 && (
            <div className="freeShipping">✓ Congratulations! Free shipping applied</div>
          )}

          <div className="summaryItem">
            <span>Tax (10%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="summaryItem discount">
              <span>Discount:</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="divider"></div>

          <div className="summaryItem total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="promoSection">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="promoInput"
            />
            <button
              onClick={handleApplyPromo}
              className="applyBtn"
              disabled={promoApplied}
            >
              {promoApplied ? "Applied ✓" : "Apply"}
            </button>
          </div>

          <p className="promoHint">Try codes: SAVE10 or SAVE20</p>

          <button onClick={handleCheckout} className="checkoutBtn">
            Proceed to Checkout
          </button>

          <button onClick={() => navigate("/")} className="continueBtnSmall">
            Continue Shopping
          </button>

          <div className="trustBadges">
            <div className="badge">🔒 Secure Checkout</div>
            <div className="badge">🚚 Fast Shipping</div>
            <div className="badge">↩️ Easy Returns</div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="recommendations">
        <h3>You might also like</h3>
        <div className="recommendedItems">
          {[
            { id: 1, name: "Premium Cotton T-Shirt", price: 45.99, img: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=200&h=200&fit=crop" },
            { id: 2, name: "Classic Polo Shirt", price: 55.99, img: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=200&h=200&fit=crop" },
            { id: 3, name: "Casual Sneakers", price: 89.99, img: "https://images.unsplash.com/photo-1549864386-e91cbb11fef2?w=200&h=200&fit=crop" },
          ].map((item) => (
            <div key={item.id} className="recommendedItem">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">${item.price}</p>
              <button onClick={() => navigate(`/product/${item.id}`)}>
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartEnhanced;
