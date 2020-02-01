import React from 'react';
import PropTypes from 'prop-types';
import { Link, Image } from './style';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji }) => (
  <Link to={path}>
    <Image src={cover} alt="" />
    {emoji}
  </Link>
);

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string,
};
