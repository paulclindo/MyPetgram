import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import SIGNUP from '../graphql/signUp.gql';

const REGISTER = gql`
  ${SIGNUP}
`;

export const RegisterMutation = ({ children }) => (
  <Mutation mutation={REGISTER}>{children}</Mutation>
);
