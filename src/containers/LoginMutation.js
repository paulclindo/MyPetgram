import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import LOGIN from '../graphql/signIn.gql';

const LOG_IN = gql`
  ${LOGIN}
`;

export const LoginMutation = ({ children }) => (
  <Mutation mutation={LOG_IN}>{children}</Mutation>
);
