import styled from 'styled-components';
// import { Link as LinkRouter } from '@reach/router';

export const Div = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  padding: 0 1.5rem;
  background: #8a2387; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f27121,
    #e94057,
    #8a2387
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f27121,
    #e94057,
    #8a2387
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-top: 4rem;
  flex-direction: column;
  color: white;
  text-align: center;
`;

export const TitleError = styled.h1`
  font-size: 90px;
  font-weight: 700;
  padding-bottom: 2rem;
`;
export const MessageError = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
