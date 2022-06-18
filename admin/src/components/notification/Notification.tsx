import { useState, useEffect } from "react";
import "./notification.css";

interface NotificationProps {
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose: () => void;
}

export default function Notification({
  message,
  type,
  duration = 3000,
  onClose,
}: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`notification notification-${type}`}>
      <div className="notificationContent">
        <span className="notificationIcon">
          {type === "success" && "✓"}
          {type === "error" && "✕"}
          {type === "info" && "ℹ"}
          {type === "warning" && "⚠"}
        </span>
        <span className="notificationMessage">{message}</span>
      </div>
      <button onClick={onClose} className="notificationClose">
        ×
      </button>
    </div>
  );
}

export function NotificationContainer() {
  const [notifications, setNotifications] = useState<
    Array<{ id: string; message: string; type: "success" | "error" | "info" | "warning" }>
  >([]);

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="notificationContainer">
      {notifications.map((notif) => (
        <Notification
          key={notif.id}
          message={notif.message}
          type={notif.type}
          onClose={() => removeNotification(notif.id)}
        />
      ))}
    </div>
  );
}
