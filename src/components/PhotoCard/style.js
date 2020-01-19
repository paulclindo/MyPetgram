import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const Article = styled.article`
  min-height:200px;
`

export const ImgWrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const Img = styled.img`
  ${fadeIn()}
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  object-fit: cover;
`;

