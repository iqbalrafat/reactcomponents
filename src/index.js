import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App=()=>{
  return(
  <div className="ui container comments">

    <CommentDetail author='Sam' ToAgo="Today at 6:00 PM" text="Hello Friends" source={faker.image.cats()}/>
    <CommentDetail author='Jane' ToAgo="Today at 8:00 PM" text="Hello Friends" source={faker.image.people()}/>
    <CommentDetail author='Emma' ToAgo="Today at 10:00 PM" text="Hello Friends" source={faker.image.animals()}/>
    
  </div>
  );
};
ReactDOM.render(<App/>,document.querySelector('#root'));