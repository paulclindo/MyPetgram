import PropTypes from 'prop-types';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { Img, ImgWrapper, Button } from './style';

export const PhotoCard = ({ id, likes = 0, src }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={src} alt="" />
      </ImgWrapper>
    </a>
    <Button type="button">
      <IoIosHeartEmpty size={25} />
      {likes} likes!
    </Button>
  </article>
);

PhotoCard.propTypes = {
  id: PropTypes.number,
  likes: PropTypes.number,
  src: PropTypes.string,
};
