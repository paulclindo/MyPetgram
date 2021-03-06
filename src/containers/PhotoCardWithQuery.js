import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PhotoCard } from '../components/PhotoCard';
import getSinglePhoto from '../graphql/getSinglePhoto.gql';
import { Loading } from '../components/Loader';

const GET_SINGLE_PHOTO = gql`
  ${getSinglePhoto}
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });
  const photo = data && data.photo;

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;
  return <PhotoCard {...photo} />;
};
