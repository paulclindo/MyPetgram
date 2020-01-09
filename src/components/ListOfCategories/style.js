import styled from "styled-components"

const List = styled.ul`
  display:flex;
  overflow: scroll;
  width:100%;

`
const Item = styled.li`
  padding: 0 1rem;
  list-style: none;
` 

export {
  List,
  Item
}