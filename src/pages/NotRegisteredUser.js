/*eslint-disable*/
import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm/index';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';

export default () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };
          const errorMessage =
            error && 'User already exist or something went wrong!';

          return (
            <UserForm
              title="Sign up"
              error={errorMessage}
              disabled={loading}
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };
          const errorMessage = error && 'User doesnt exist with that email!';
          return (
            <UserForm
              title="Sign in"
              error={errorMessage}
              disabled={loading}
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
