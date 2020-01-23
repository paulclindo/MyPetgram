import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const Article = styled.article`
  min-height: 200px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: 56.25%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
`;

export const Img = styled.img`
  ${fadeIn()}
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  object-fit: cover;
`;
