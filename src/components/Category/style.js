import styled from 'styled-components';
import { Link as LinkRouter } from "@reach/router"

const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  text-decoration: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 75px;
  height: 75px;
  /* border: 1px solid #ddd; */
  border-radius: 50%;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  /* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12); */
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 5px;
`;

export { Link, Image };
