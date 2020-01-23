import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

const List = styled.ul`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-bottom: 1.5rem;
  ${props =>
    props.fixed &&
    css`
      position: fixed;
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20 rgba(0, 0, 0, 0.3);
      left: 0;
      right: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
      ${fadeIn()}
    `}
`;
const Item = styled.li`
  padding: 0 1rem;
  list-style: none;
`;

export { List, Item };
