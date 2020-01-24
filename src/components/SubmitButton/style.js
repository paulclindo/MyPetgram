import styled from 'styled-components';

export const Button = styled.button`
  background: #8d00ff;
  color: #fff;
  border-radius: 20px;
  height: 40px;
  display: block;
  box-shadow: 0 10px 30px 0 rgba(51, 51, 51, 0.5);
  margin: 0 auto;
  width: 80%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;
