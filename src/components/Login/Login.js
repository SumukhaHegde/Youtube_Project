import React from "react";
import ytLogo from "../../Constants/Images/yt-logo.png";
import "./_login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-details-container">
        <p>Youtube Clone</p>
        <img src={ytLogo} alt="" />
        <button>Login with Google</button>
        <p>This Project is made from youtube DATA API</p>
        <span>Developed by - Sumukha Hegde</span>
      </div>
    </div>
  );
};

export default Login;
