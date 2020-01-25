import React from 'react';
import { Div, TitleError, MessageError } from './style';
import { SubmitButton } from '../SubmitButton/index';

export const NotFound = () => (
  <>
    <Div>
      <TitleError>404</TitleError>
      <MessageError>
        We are sorry, but the page you requested was not found
      </MessageError>
      {/* <SubmitButton  /> */}
    </Div>
  </>
);
