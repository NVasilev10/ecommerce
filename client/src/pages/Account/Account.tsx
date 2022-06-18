import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./account.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.currentUser);
  const [activeTab, setActiveTab] = useState("profile");
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, New York, NY 10001",
  });

  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-10",
      items: 3,
      total: 245.99,
      status: "Delivered",
      products: ["Premium Cotton T-Shirt", "Classic Denim Jeans", "Casual Sneakers"],
    },
    {
      id: "ORD-002",
      date: "2024-01-08",
      items: 2,
      total: 165.98,
      status: "In Transit",
      products: ["Silk Blouse", "Designer Handbag"],
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      items: 1,
      total: 89.99,
      status: "Pending",
      products: ["Sport Activewear Set"],
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      address: "123 Main St, New York, NY 10001",
      phone: "+1 234 567 8900",
      default: true,
    },
    {
      id: 2,
      type: "Office",
      address: "456 Business Ave, New York, NY 10002",
      phone: "+1 234 567 8901",
      default: false,
    },
  ];

  const wishlist = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1618886996285-e3e18c4c5aac?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Silk Blouse",
      price: 85.99,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=200&h=200&fit=crop",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="accountContainer">
        <div className="notLoggedIn">
          <h1>Please log in to view your account</h1>
          <button onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="accountContainer">
      <div className="accountHeader">
        <h1>👤 My Account</h1>
        <p>Manage your profile, orders, and preferences</p>
      </div>

      <div className="accountContent">
        {/* Sidebar */}
        <aside className="accountSidebar">
          <nav className="accountNav">
            <button
              className={`navItem ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              👤 Profile Info
            </button>
            <button
              className={`navItem ${activeTab === "orders" ? "active" : ""}`}
              onClick={() => setActiveTab("orders")}
            >
              📦 Orders
            </button>
            <button
              className={`navItem ${activeTab === "addresses" ? "active" : ""}`}
              onClick={() => setActiveTab("addresses")}
            >
              📍 Addresses
            </button>
            <button
              className={`navItem ${activeTab === "wishlist" ? "active" : ""}`}
              onClick={() => setActiveTab("wishlist")}
            >
              ❤️ Wishlist
            </button>
            <button
              className={`navItem ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              ⚙️ Settings
            </button>
            <button className="navItem logout" onClick={handleLogout}>
              <LogoutIcon fontSize="small" /> Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="accountMain">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="tabContent">
              <div className="contentHeader">
                <h2>Profile Information</h2>
                <button
                  className="editBtn"
                  onClick={() => setEditMode(!editMode)}
                >
                  <EditIcon fontSize="small" />
                  {editMode ? "Cancel" : "Edit"}
                </button>
              </div>

              <div className="profileCard">
                {editMode ? (
                  <form className="editForm">
                    <div className="formGroup">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button type="button" className="saveBtn" onClick={handleSaveProfile}>
                      Save Changes
                    </button>
                  </form>
                ) : (
                  <div className="profileInfo">
                    <div className="infoRow">
                      <span className="label">Full Name:</span>
                      <span className="value">{formData.name}</span>
                    </div>
                    <div className="infoRow">
                      <span className="label">Email:</span>
                      <span className="value">{formData.email}</span>
                    </div>
                    <div className="infoRow">
                      <span className="label">Phone:</span>
                      <span className="value">{formData.phone}</span>
                    </div>
                    <div className="infoRow">
                      <span className="label">Address:</span>
                      <span className="value">{formData.address}</span>
                    </div>
                    <div className="memberInfo">
                      <p>Member since: January 2024</p>
                      <p>Loyalty points: 450</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="tabContent">
              <h2>Order History</h2>
              <div className="ordersContainer">
                {orders.map(order => (
                  <div key={order.id} className="orderCard">
                    <div className="orderHeader">
                      <div>
                        <h4>{order.id}</h4>
                        <p className="orderDate">{order.date}</p>
                      </div>
                      <div className={`orderStatus ${order.status.toLowerCase().replace(" ", "-")}`}>
                        {order.status}
                      </div>
                    </div>
                    <div className="orderDetails">
                      <div>
                        <p className="label">Items ({order.items})</p>
                        {order.products.map((product, idx) => (
                          <p key={idx} className="product">• {product}</p>
                        ))}
                      </div>
                      <div className="orderTotal">
                        <p className="label">Total</p>
                        <p className="price">${order.total}</p>
                      </div>
                    </div>
                    <div className="orderActions">
                      <button className="viewBtn">View Details</button>
                      <button className="trackBtn">Track Order</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === "addresses" && (
            <div className="tabContent">
              <div className="contentHeader">
                <h2>Saved Addresses</h2>
                <button className="addBtn">+ Add New Address</button>
              </div>
              <div className="addressesGrid">
                {addresses.map(addr => (
                  <div key={addr.id} className="addressCard">
                    <div className="addressHeader">
                      <h4>{addr.type}</h4>
                      {addr.default && <span className="defaultBadge">Default</span>}
                    </div>
                    <p className="address">{addr.address}</p>
                    <p className="phone">{addr.phone}</p>
                    <div className="addressActions">
                      <button className="editBtn"><EditIcon fontSize="small" /> Edit</button>
                      <button className="deleteBtn"><DeleteIcon fontSize="small" /> Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === "wishlist" && (
            <div className="tabContent">
              <h2>My Wishlist</h2>
              <div className="wishlistGrid">
                {wishlist.map(item => (
                  <div key={item.id} className="wishlistItem">
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p className="price">${item.price}</p>
                    <div className="wishlistActions">
                      <button className="addToCartBtn" onClick={() => navigate("/cart")}>
                        Add to Cart
                      </button>
                      <button className="removeBtn"><DeleteIcon fontSize="small" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="tabContent">
              <h2>Account Settings</h2>
              <div className="settingsCard">
                <div className="settingRow">
                  <div>
                    <h4>Email Notifications</h4>
                    <p>Receive updates about orders and promotions</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </label>
                </div>
                <div className="settingRow">
                  <div>
                    <h4>SMS Notifications</h4>
                    <p>Get SMS alerts for order updates</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div className="settingRow">
                  <div>
                    <h4>Newsletter</h4>
                    <p>Subscribe to our weekly newsletter</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </label>
                </div>
              </div>

              <div className="dangerZone">
                <h3>Danger Zone</h3>
                <button className="deleteAccountBtn">Delete Account</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Account;
