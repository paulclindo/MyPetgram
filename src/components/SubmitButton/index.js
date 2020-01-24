import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from './style';

export const SubmitButton = ({ children, disabled, onClick }) => (
  <Button onClick={onClick} disabled={disabled} type="submit">
    {children}
  </Button>
);

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
