import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Header from './Header';

const App=()=>{
  return(
  <div className="ui container comments">
    <Header />
    <ApprovalCard>
      <CommentDetail
        author='Sam'
        ToAgo="Today at 6:00 PM"
        text="Hello Friends"
        source={faker.image.cats()}
        /> 
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
        author='Jane'
        ToAgo="Today at 8:00 PM" 
        text="Hello Friends" 
        source={faker.image.people()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author='Emma' 
          ToAgo="Today at 10:00 PM" 
          text="Hello Friends" 
          source={faker.image.animals()}
        />    
      </ApprovalCard>     
  </div>
  );
};
ReactDOM.render(<App/>,document.querySelector('#root'));