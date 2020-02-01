import styled from 'styled-components';

export const Button = styled.button`
  background: #ed6a2c;
  color: #fff;
  border-radius: 3px;
  /* height: 40px; */
  display: block;
  padding: 1rem 2rem;
  box-shadow: 0 1px 3px 0 rgba(51, 51, 51, 0.5);
  margin: 0 auto;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;
