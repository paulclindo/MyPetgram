import React from 'react';
import { SquareLoading, SquareInside } from './style';

export const Loading = () => (
  <SquareLoading>
    <SquareInside />
    <SquareInside />
    <SquareInside />
  </SquareLoading>
);
