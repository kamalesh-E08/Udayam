import React from "react";
import "./loadingpage.css";
import culturalImage from "../assets/cultural.jpg"; // Import the image

export default function LoadingPage() {
  return (
    <div className="loading-screen">
      <img src={culturalImage} alt="Cultural Event" className="loading-image" />
    </div>
  );
}
