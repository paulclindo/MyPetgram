import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import getFavs from '../graphql/getFavs.gql';
import { Loading } from '../components/Loader/index';
import { ListOfFavs } from '../components/ListOfFavs/index';

const GET_FAVS = gql`
  ${getFavs}
`;
/* eslint-disable */

export const GetFavorites = () => {
  const { loading, data, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;
  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};

// Ira siempre a la red a recuperar los datos
// { fetchPolicy: "network-only" }

// Va a la red y obtiene una version fresca que almacena en el cache, si hay acceso offline
// { fetchPolicy: "cache-and-network" }
