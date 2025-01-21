import React from 'react';
import './domain.css';

const Domain = () => {
  const domains = [
    "Front-end",
    "Back-end",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "ChatBot",
    "IOT",
    "Android",
    "Python",
    "Java",
    "Blockchain",
    "Cloud Computing"
  ];

  return (
    <div className="container">
      <video className="background-video" autoPlay loop muted>
        <source src="https://v.ftcdn.net/04/73/15/69/700_F_473156948_5MRzkGALqc9GZ3EX9fwzNpjl7w8KX74n_ST.mp4" type="video/mp4" />
      </video>
      <div className="border-box">
        <h1 className="heading">Buying</h1>
        <h2 className="subheading">Choose the Domain</h2>
        
        <div className="button-container">
          {domains.map((domain, index) => (
            <a href="/buyproj">
            <button
              key={index}
              className="domain-button"
            >
              {domain}
            </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domain;
