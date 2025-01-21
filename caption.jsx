import React from 'react';
import './Caption.css';

const Caption = () => {
  // Array of data for each borderbox
  const borderboxData = [
    {
      videoSrc: "https://www.shutterstock.com/shutterstock/videos/3637483279/preview/stock-footage-female-software-engineer-focused-on-working-on-a-machine-learning-model-displayed-across-three.webm",
      title: "Analyzing Data",
      domain: "Machine Learning",
      cost: "Rs. 15000/-",
      contact: "7842872322",
    },
    {
      videoSrc: "https://www.shutterstock.com/shutterstock/videos/24089275/preview/stock-footage-oscillator-circuit-on-prototyping-board-breadboard.webm",
      title: "Oscillator circuit",
      domain: "Internet of Things",
      cost: "Rs. 20000/-",
      contact: "9247581836",
    },
    {
      videoSrc: "https://www.shutterstock.com/shutterstock/videos/27164941/preview/stock-footage--k-electronics-engineer-working-on-design-of-robot-in-dark-lab.webm",
      title: "Signed model",
      domain: "artificial Intelligence ",
      cost: "Rs. 56999/-",
      contact: "7993321836",
    },
    {
      videoSrc: "https://www.shutterstock.com/shutterstock/videos/1016815561/preview/stock-footage--virus-detected-warning-notification-generated-on-digital-system-security-alert-error-message-on.webm",
      title: "Virus detected Warning",
      domain: "cyber security",
      cost: "Rs. 60000/-",
      contact: "8897903777",
    }
  ];

  return (
    <div className="caption-container">
      <div className="borderbox1">
        <h1>Buying Projects</h1>
      </div>

      <div className="borderbox2-container">
        {borderboxData.map((item, index) => (
          <div key={index} className="borderbox2">
            <div className="video-output">
              <video width="100%" controls>
                <source src={item.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>{item.title}</h3>
            <p><strong>Domain:</strong> {item.domain}</p>
            <p><strong>Cost:</strong> {item.cost}</p>
            <div className="buttons">
              <button className="contact-btn">Contact Us Now</button>
              <button className="call-btn">Call Us: {item.contact}</button>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caption;
