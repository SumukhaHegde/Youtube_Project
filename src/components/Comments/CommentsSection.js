import React, { useEffect, useState } from "react";
import "./_commentsSection.scss";
import Comments from "./Comments";
import { getCommentsForVideo } from "../../Constants/API/Api";
import { useDispatch, useSelector } from "react-redux";
import { setCommentsList } from "../../Utils/store/commentsListSlice";

const CommentsSection = ({ videoId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.commentsList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  const getCommentsByVideoId = async () => {
    const { data } = await getCommentsForVideo(videoId);
    dispatch(setCommentsList(data.items));
  };

  useEffect(() => {
    getCommentsByVideoId();
  });
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
      {_comments?.map((comment, index) => (
        <Comments comment={comment} key={index} />
      ))}
    </div>
  );
};

export default CommentsSection;
