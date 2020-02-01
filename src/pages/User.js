/*eslint-disable*/

import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton/index';

export default () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Sign Out</SubmitButton>
    </>
  );
};
