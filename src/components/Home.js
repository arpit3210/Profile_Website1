import React from 'react';
import './Home.css'; // Import the CSS file for the component
const Home = () => {
  return (
<div className="home-container">
      <div className="left-container">
        <h1 className="home-title">Welcome to Our Hotel Booking Website</h1>
      </div>
      <div className="right-container">
        <p className="home-description">Find the perfect resort for your next vacation and book it using Bitcoin or cryptocurrencies.</p>
      </div>
      {/* <div className="center-container">
        <button className="home-button">Explore Resorts</button>
      </div> */}
    </div>
  );
};

export default Home;
