import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { Article, Img, ImgWrapper, Button } from './style';
import { useLocalStorage } from './../../hooks/useLocalStorage';
import { useNearScreen } from './../../hooks/useNearScreen';

export const PhotoCard = ({ id, likes, src }) => {

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const Icon = liked ? IoIosHeart : IoIosHeartEmpty


  return (
    <Article ref={element}>
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="" />
              </ImgWrapper>
            </a>
            <Button onClick={() => { setLiked(!liked) }} type="button">
              <Icon size={25} />
              {likes} likes!
            </Button>
          </>
        )
      }

    </Article>
  )
};

PhotoCard.propTypes = {
  id: PropTypes.number,
  likes: PropTypes.number,
  src: PropTypes.string,
};
