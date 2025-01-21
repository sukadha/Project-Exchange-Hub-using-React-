import React from "react";
import "./sellproj.css";
import sellprojImage from "./sellproj.png"; // Import the image

const Sellproj = () => {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src="https://v.ftcdn.net/03/69/14/40/700_F_369144079_zYNrnxj77etWcWsPTxjjGHo1jjWohTgX_ST.mp4" type="video/mp4" />
      </video>
      <div className="sellproj-container">
        <div className="sellproj-box">
          <h2>Selling Projects</h2>
          <form className="sellproj-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="domain">Domain:</label>
              <input type="text" id="domain" placeholder="Enter domain" />
            </div>
            <div className="form-group">
              <label htmlFor="project-title">Project Title:</label>
              <input type="text" id="project-title" placeholder="Enter project title" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" placeholder="Enter price" />
            </div>
            <div className="form-group">
              <label htmlFor="video">Video Output:</label>
              <input type="file" id="video" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No:</label>
              <input type="tel" id="phone" placeholder="Enter phone number" />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        {/* Right-hand side image */}
        <img src={sellprojImage} alt="Sell Project" className="sellproj-image" />
      </div>
    </div>
  );
};

export default Sellproj;
