import React from 'react';
import faker from 'faker';
import './CommentDetail.css';
const CommentDetail=(props)=>{
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.source}/>
        </a>
      <div className="content">
          <a href="/" className="author">{props.author}</a>
        <div className="metadata">
            <span className="data">{props.ToAgo}</span>
        </div>
        <div className="text">{props.text}</div>
      </div> 
    </div>
  );
};
export default CommentDetail;