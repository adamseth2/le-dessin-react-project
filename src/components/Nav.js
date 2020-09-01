import React from 'react';
import '../scss/Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  const linkStyle = {
    color: '#f4f4f4',
    tabindex: '-1',
  };
  return (
    <nav>
      <Link style={linkStyle} to='/'>
        <h1>le Dessin</h1>
      </Link>
      <Link style={linkStyle} to='/Login'>
        <h2 href='/#'>Log in</h2>
      </Link>
      <div className='bottom-border'></div>
    </nav>
  );
};

export default Nav;
