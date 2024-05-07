import React from "react";
import moment from "moment";

const Comments = () => {
  return (
    <div className="video-comments">
      <img
        className="user-profile"
        src="https://yt3.ggpht.com/yti/ANjgQV-7v3OAFwuOuuyI0r48ZKgq4yfkhxi309vivuekIg=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="user"
      />
      <div className="comments">
        <div>
          <span className="user-name">Sumukha </span>
          <span className="comment-published">
            • {moment("2020-05-05").fromNow()}
          </span>
        </div>
        <div className="user-comment">Nice video Dude</div>
      </div>
    </div>
  );
};

export default Comments;
