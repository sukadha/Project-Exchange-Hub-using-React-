import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <video autoPlay loop muted className="background-video">
        <source src="https://v.ftcdn.net/07/21/95/78/700_F_721957824_2FPrHGYazKkB5p0q3AvjsCzB11vIXH5X_ST.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-box">
        <h2>Login</h2>
        <input type="email" placeholder="Email ID" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
        <a href="/sell">
        <button className="login-button">Login</button>
        </a>
        <p className="signup-message">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <div className="or-separator">------------------ or ------------------</div>
        <div className="social-buttons">
          <button className="google-button">Login with Google</button>
          <button className="facebook-button">Login with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
