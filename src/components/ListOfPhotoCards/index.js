import React from 'react'
import { photos } from '../../../api/db.json';
import { PhotoCard } from './../PhotoCard';

console.log(photos)

const ListOfPhotoCards = () => {
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

export default ListOfPhotoCards;