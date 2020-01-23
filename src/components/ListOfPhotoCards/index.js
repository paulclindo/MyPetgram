import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { List } from './style';

const ListOfPhotoCardsComponent = ({ photos = [] }) => (
  <List>
    {photos.map(photo => (
      <PhotoCard key={photo.id} {...photo} />
    ))}
  </List>
);

export default ListOfPhotoCardsComponent;
