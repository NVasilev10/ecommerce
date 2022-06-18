import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./userProfile.css";

export default function UserProfile() {
  const dispatch = useDispatch();
  //@ts-ignore
  const user = useSelector((state) => state.user?.currentUser);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
    zipCode: user?.zipCode || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here you would typically make an API call to update the user
    console.log("Saving user data:", formData);
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="profileContainer">
        <p>Please log in to view your profile</p>
      </div>
    );
  }

  return (
    <div className="profileContainer">
      <h2>My Profile</h2>

      <div className="profileCard">
        <div className="profileHeader">
          <div className="profileAvatar">
            {user.username?.charAt(0).toUpperCase()}
          </div>
          <div className="profileInfo">
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p className="memberSince">Member since 2024</p>
          </div>
          <button
            className="editBtn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {isEditing ? (
          <div className="editForm">
            <div className="formGroup">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="formGroup">
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button onClick={handleSave} className="saveBtn">
              Save Changes
            </button>
          </div>
        ) : (
          <div className="profileDetails">
            <div className="detailRow">
              <span>Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="detailRow">
              <span>Phone:</span>
              <span>{user.phone || "Not provided"}</span>
            </div>
            <div className="detailRow">
              <span>Address:</span>
              <span>{user.address || "Not provided"}</span>
            </div>
            <div className="detailRow">
              <span>City:</span>
              <span>{user.city || "Not provided"}</span>
            </div>
            <div className="detailRow">
              <span>Zip Code:</span>
              <span>{user.zipCode || "Not provided"}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
