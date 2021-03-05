import React from 'react';
import faker from 'faker';
import './CommentDetail.css';

const Header=(props)=>{
  return (
  <div className="header">
    <div className="logo">  
      <img class="image" alt="test" src={props.source1}/>
        <div>
          <h3> {props.heading}</h3>
        </div>    
      </div>
    {props.children}
  </div>
  );
}
export default Header;