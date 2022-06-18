import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./wishlist.css";

export default function Wishlist() {
  const dispatch = useDispatch();
  //@ts-ignore
  const wishlistProducts = useSelector((state) => state.wishlist?.products || []);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleRemove = (productId: string) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: productId,
    });
    setNotificationMessage("Item removed from wishlist");
    setTimeout(() => setNotificationMessage(""), 3000);
  };

  const handleAddToCart = (product: any) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        quantity: 1,
      },
    });
    handleRemove(product._id);
    setNotificationMessage("Added to cart!");
    setTimeout(() => setNotificationMessage(""), 3000);
  };

  return (
    <div className="wishlistContainer">
      <h2>My Wishlist ({wishlistProducts.length})</h2>

      {notificationMessage && (
        <div className="notificationMessage">{notificationMessage}</div>
      )}

      {wishlistProducts.length === 0 ? (
        <div className="emptyWishlist">
          <p>Your wishlist is empty</p>
          <a href="/products">Continue Shopping</a>
        </div>
      ) : (
        <div className="wishlistGrid">
          {wishlistProducts.map((product: any) => (
            <div key={product._id} className="wishlistItem">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">${product.price}</p>
              <div className="wishlistActions">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="addToCartBtn"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemove(product._id)}
                  className="removeBtn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
