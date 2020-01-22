import React from 'react';
import { PhotoCard } from '../PhotoCard';

const ListOfPhotoCardsComponent = ({ photos = [] }) => (
  <ul>
    {photos.map(photo => (
      <PhotoCard key={photo.id} {...photo} />
    ))}
  </ul>
);

export default ListOfPhotoCardsComponent;
