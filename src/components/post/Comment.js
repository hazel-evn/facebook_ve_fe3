import React from "react";
import Moment from "react-moment";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.commentBy.picture} alt="" className="comment_img" />
      <div className="comment_col">
        <div className="comment_wrap">
          <div className="comment_name">
            <b>
              {comment.commentBy.first_name} {comment.commentBy.last_name}
            </b>
          </div>
          <div className="comment_text">{comment.comment}</div>
        </div>
        {comment.image && (
          <img src={comment.image} alt="" className="comment_image" />
        )}
        <div className="comment_actions">
          <span>Like</span>
          <span>Reply</span>
          <span>
            <Moment fromNow>{comment.commentAt}</Moment>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;