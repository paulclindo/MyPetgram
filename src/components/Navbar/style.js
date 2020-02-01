import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
  position: fixed;
  max-width: 500px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  height: 80px;
  background: #fcfcfc;
  color: white;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  &:hover {
    color: #333;
  }

  &[aria-current] {
    color: #333;

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '•';
      position: absolute;
      bottom: 0;
      font-size: 24px;
      line-height: 40px;
    }
  }
`;
