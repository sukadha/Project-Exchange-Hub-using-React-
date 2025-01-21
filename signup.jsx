import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <video autoPlay loop muted className="background-video">
        <source src="https://v.ftcdn.net/08/06/77/97/700_F_806779703_sSIA1j7EfKyxCcbVN2toCNIaFvUa8saB_ST.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="signup-box">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" className="input-box" />
        <input type="email" placeholder="Email" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
        <button className="signup-button">Sign Up</button>
        <p className="login-message">
          Already have an account? <a href="/login">Login</a>
        </p>
        <div className="or-separator">------------------ or ------------------</div>
        <button className="google-button">Sign Up with Google</button>
      </div>
    </div>
  );
};

export default Signup;
