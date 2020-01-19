import React from 'react'
import { PhotoCard } from './../PhotoCard';

const ListOfPhotoCardsComponent = ({ photos = [] }) => {
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