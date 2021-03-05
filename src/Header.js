import React from 'react';
import faker from 'faker';

const Header=()=>{
  return (
  <div className="header">
    <div>  
      <img class="image" alt="test" src={faker.image.people()}/>
    </div>
  </div>
  );
}
export default Header;