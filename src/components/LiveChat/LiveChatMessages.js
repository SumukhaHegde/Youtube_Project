import React from "react";
import userLogo from "../../Constants/Images/UserIcon.jpg";

const LiveChatMessages = ({ name, message }) => {
  return (
    <>
      <div className="live-chat">
        <img className="livechat-user-logo" src={userLogo} alt="logo" />
        <div className="livechat-user-section">
          <span className="livechat-username">{name}</span>
          <span className="livechat-usermessage">{message}</span>
        </div>
      </div>
    </>
  );
};

export default LiveChatMessages;
