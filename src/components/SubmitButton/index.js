import React from 'react';
import { Button } from './style';

export const SubmitButton = ({ children, disabled, onClick }) => (
  <Button onClick={onClick} disabled={disabled} type="submit">
    {children}
  </Button>
);
