import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import likeAnonymousPhoto from '../graphql/likeAnonymousPhoto.gql';

const LIKE_PHOTO = gql`
  ${likeAnonymousPhoto}
`;

export const ToggleLikeMutation = ({ children }) => (
  <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>
);
