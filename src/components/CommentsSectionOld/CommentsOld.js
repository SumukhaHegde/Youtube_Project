import React from "react";
import "./commentsHeader.scss";
import CommentsList from "./CommentsList";

const Comments = () => {
  const commentsdata = [
    {
      name: "Sumukha",
      message: "This is a dummy message",
      replies: [
        {
          name: "Sumukha",
          message: "This is a dummy message",
          replies: [
            {
              name: "Sumukha",
              message: "This is a dummy message",
              replies: [
                {
                  name: "Sumukha",
                  message: "This is a dummy message",
                  replies: [],
                },
              ],
            },

            {
              name: "Sumukha",
              message: "This is a dummy message",
              replies: [],
            },
          ],
        },

        { name: "Sumukha", message: "This is a dummy message", replies: [] },
      ],
    },
    { name: "Sumukha", message: "This is a dummy message", replies: [] },
    { name: "Sumukha", message: "This is a dummy message", replies: [] },
    { name: "Sumukha", message: "This is a dummy message", replies: [] },
    { name: "Sumukha", message: "This is a dummy message", replies: [] },
    { name: "Sumukha", message: "This is a dummy message", replies: [] },
    { name: "Sumukha", message: "This is a dummy message", replies: [] },
    { name: "Sumukha", message: "This is a dummy message", replies: [] },
    { name: "Sumukha", message: "This is a dummy message", replies: [] },
  ];
  return (
    <div className="comments-header">
      Comments
      <CommentsList comments={commentsdata} />
    </div>
  );
};

export default Comments;
