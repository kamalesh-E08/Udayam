import React from "react";
import "./loadingpage.css";
import loading from "../assets/Loading.mp4"

export default function LoadingPage() {
  return (
    <div className="loading">
      <video autoPlay muted loop playsInline alt="Cultural Event" className="loading-image">
        <source src={loading} type = "video/mp4"></source>
      </video>
    </div>
  );
}
