import React from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { PropTypes } from 'prop-types';
import { Button } from './style';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? IoIosHeart : IoIosHeartEmpty;

  return (
    <Button onClick={onClick} type="button">
      <Icon size={25} />
      {likes} likes!
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func,
};
