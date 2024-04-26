import React from "react";
import ytLogo from "../../Constants/Images/yt-logo.png";
import "./_login.scss";
import { useDispatch } from "react-redux";
import { addLoginUser } from "../../Utils/store/loginLogoutSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(addLoginUser());
  };

  return (
    <div className="login-container">
      <div className="login-details-container">
        <p>Youtube Clone</p>
        <img src={ytLogo} alt="" />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This Project is made from youtube DATA API</p>
        <span>Developed by - Sumukha Hegde</span>
      </div>
    </div>
  );
};

export default Login;
