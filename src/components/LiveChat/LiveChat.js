import React, { useEffect, useState } from "react";
import "./livechat.scss";
import {
  randomMessageGenerator,
  randomNameGenerator,
} from "../../Utils/Helper/TestDataUtil";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../../Utils/store/chatSlice";
import LiveChatMessages from "./LiveChatMessages";

const LiveChat = () => {
  const [typedMessage, setTypedMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.liveChats.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      const randomName = randomNameGenerator();
      const randomMessage = randomMessageGenerator(20);
      dispatch(
        addMessages({
          name: randomName,
          message: randomMessage,
        })
      );
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="live">
      <div className="live-chat-section">
        {chatMessages.map((chatMessage, index) => {
          return (
            <LiveChatMessages
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          );
        })}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Sumukha",
              message: typedMessage,
            })
          );
          setTypedMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Chat here"
          value={typedMessage}
          onChange={(e) => {
            setTypedMessage(e.target.value);
          }}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
