import React from "react";
import "./service.css";
import axios from "axios";

const ServicesCard = () => {
  const token = localStorage.getItem("token");

  // Generalized handler for service button clicks
  const handleServiceClick = (serviceEndpoint) => {
    console.log(`Requesting service: ${serviceEndpoint}`);
    if (!token) {
      alert("Token not found. Please log in.");
      return;
    }

    axios
      .get(`https://vrv-assignment-a6zw.onrender.com/service/${serviceEndpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.error(`Error accessing ${serviceEndpoint}:`, error.response?.data || error.message);
        alert(`Error: ${error.response?.data?.message || "Failed to access the service."}`);
      });
  };

  return (
    <div className="service-card">
    <h2> Premium Security Solutions:</h2>
    <button onClick={() => handleServiceClick("secure-cam")}>Smart Surveillance Network</button>
    <button onClick={() => handleServiceClick("deploy-guards")}>On-Demand Security Personnel</button>
    <button onClick={() => handleServiceClick("attendance-tracking")}>Employee Check-in System</button>
    <button onClick={() => handleServiceClick("patrol-units")}>Real-Time Patrol</button>
  </div>
  
  );
};

export default ServicesCard;
