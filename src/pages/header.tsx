import React from 'react';

function Header() {
  return (
    <header className="header">
      <p className="logo">Coffee</p> 
      <ul className="menu-header-ul">
        <li> 
          <a className="header-link-menu" href="#blog">Blog</a>
        </li>
        <li>
          <a className="header-link-menu" href="#shop">Shop</a>
        </li>
        <li>
          <a className="header-link-menu" href="#about">About</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
