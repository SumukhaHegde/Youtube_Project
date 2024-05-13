import React from "react";
import moment from "moment";

const Comments = ({ comment }) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    textOriginal,
    publishedAt,
  } = comment;
  return (
    <div className="video-comments">
      <img className="user-profile" src={authorProfileImageUrl} alt="user" />
      <div className="comments">
        <div>
          <span className="user-name">{authorDisplayName} </span>
          <span className="comment-published">
            • {moment(publishedAt).fromNow()}
          </span>
        </div>
        <div className="user-comment">{textOriginal}</div>
      </div>
    </div>
  );
};

export default Comments;
