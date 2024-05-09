import React from "react";
import "./_commentsSection.scss";
import Comments from "./Comments";

const CommentsSection = () => {
  return (
    <div className="comments-section">
      <div className="total-comments">
        <span>10 Comments</span>
      </div>
      <div className="comments-form">
        <img
          className="user-profile"
          src="https://yt3.ggpht.com/yti/ANjgQV-7v3OAFwuOuuyI0r48ZKgq4yfkhxi309vivuekIg=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="user"
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Add a comment..."
            className="comment-inputbox"
          ></input>
          <button className="comment-btn">Add Comment</button>
        </form>
      </div>
      {[...Array(10)].map((index) => (
        <Comments key={index} />
      ))}
    </div>
  );
};

export default CommentsSection;
