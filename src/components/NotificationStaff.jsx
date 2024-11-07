import React, { useState, useEffect } from "react";
import { db, collection, getDocs } from "../firebase"; // Adjust import path
import "./css/NotificationStaff.css";

const NotificationStaff = () => {
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from Firestore
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "notifications"));
        const notificationsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotifications(notificationsList);
      } catch (error) {
        console.error("Error fetching notifications: ", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notification-staff-page">
      <h2>Staff Notifications</h2>

      {/* Display Notifications */}
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.type}`}
          >
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationStaff;
