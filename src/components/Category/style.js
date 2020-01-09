import styled from "styled-components"

const Anchor = styled.a`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:75px;
  text-decoration: none;
  cursor: pointer;
`

const Image = styled.img`
  width:75px;
  height:75px;
  border: 1px solid #ddd;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  overflow: hidden;
  object-fit: cover;
  margin-bottom:10px;
`


export {
  Anchor,
  Image
}