import React from 'react'
import { photos } from '../../../api/db.json';
import { PhotoCard } from './../PhotoCard';

const ListOfPhotoCardsComponent = () => {
    return (
        <ul>
            {
                photos.map(photo => {
                    return <PhotoCard key={photo.id} {...photo} />
                })
            }
        </ul>
    );
}

export default ListOfPhotoCardsComponent;