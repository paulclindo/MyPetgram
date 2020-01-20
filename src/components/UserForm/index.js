/* eslint react/prop-types: 0 */
import React from 'react';
import { Form, Input, Button, Title, Error } from './style';
import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
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
        <Button disabled={disabled} type="submit">
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
