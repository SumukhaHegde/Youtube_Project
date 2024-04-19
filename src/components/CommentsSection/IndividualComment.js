import React from "react";
import userLogo from "../../Constants/Images/UserIcon.jpg";

const IndividualComment = ({ data }) => {
  const { name, message } = data;
  return (
    <div className="comments-section">
      <img className="comments-user-logo" src={userLogo} alt="logo" />
      <div className="comment-user-section">
        <span className="comment-username">{name}</span>
        <span className="comment-usermessage">{message}</span>
      </div>
    </div>
  );
};

export default IndividualComment;
