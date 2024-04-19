import React from "react";
import "./commentsList.scss";
import IndividualComment from "./IndividualComment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <IndividualComment data={comment} />
      <div className="reply-comment">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
