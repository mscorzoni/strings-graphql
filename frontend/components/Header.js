import React from 'react';
import Nav from './Nav';

const Header = props => {
  return (
    <div>
      <div className="bar">
        <a href="">Strings</a>
        <Nav />
      </div>
      <div className="sub-bar">
        Cart
      </div>
    </div>
  );
};

export default Header;