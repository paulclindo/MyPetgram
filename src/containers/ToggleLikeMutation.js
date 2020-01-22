import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import likePhoto from '../graphql/likePhoto.gql';

const LIKE_PHOTO = gql`
  ${likePhoto}
`;

export const ToggleLikeMutation = ({ children }) => (
  <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>
);
