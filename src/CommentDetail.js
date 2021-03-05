import React from 'react';
import faker from 'faker';
import './CommentDetail.css';
const CommentDetail=()=>{
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.people()}/>
        </a>
      <div className="content">
          <a href="/" className="author">Sam</a>
        <div className="metadata">
            <span className="data">Today at 6:00 PM</span>
        </div>
        <div className="text">Hello Friends</div>
      </div> 
    </div>
  );
};
export default CommentDetail;