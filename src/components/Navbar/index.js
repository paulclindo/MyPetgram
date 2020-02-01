import React from 'react';
import { IoIosHome, IoMdStar, IoIosPerson } from 'react-icons/io';
import { Nav, Link } from './style';

export const Navbar = () => {
  const SIZE = '32px';
  return (
    <Nav>
      <Link to="/">
        <IoIosHome size={SIZE} />
      </Link>
      <Link to="/favs">
        <IoMdStar size={SIZE} />
      </Link>
      <Link to="/user">
        <IoIosPerson size={SIZE} />
      </Link>
    </Nav>
  );
};
