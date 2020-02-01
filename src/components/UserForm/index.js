/* eslint react/prop-types: 0 */
import React from 'react';
import { ContainerForm, Form, Input, Title, Error } from './style';
import { useInputValue } from '../../hooks/useInputValue';
import { SubmitButton } from '../SubmitButton/index';

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <ContainerForm>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          type="email"
          placeholder="Username"
          {...email}
        />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </ContainerForm>
  );
};
