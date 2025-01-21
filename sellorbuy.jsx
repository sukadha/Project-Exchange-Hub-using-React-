import React from 'react';
import './sellorbuy.css';

// Importing images
import sellingImage from './selling.jpg';
import buyingImage from './buying.jpg';

const SellOrBuy = () => {
  return (
    <>
      {/* Video Background */}
      <video autoPlay loop muted className="video-background">
        <source src="https://v.ftcdn.net/10/42/57/17/700_F_1042571733_Ice0EGk1yNPrl7jKpqvzMCdKfDgnYGmF_ST.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="sellorbuy-container">
        <div className="sellorbuy-card">
          <div className="sellorbuy-content">
            {/* Left Section - Selling */}
            <div className="section">
              <img 
                src={sellingImage} 
                alt="Selling" 
                className="image"
              />
              <a href="/sellproj">
              <button className="selling-button">Selling Projects</button>
              </a>
            </div>

            {/* Divider Line */}
            <div className="divider"></div>

            {/* Right Section - Buying */}
            <div className="section">
              <img 
                src={buyingImage} 
                alt="Buying" 
                className="image"
              />
              <a href="/domainproj">
              <button className="buying-button">Buying Projects</button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellOrBuy;
