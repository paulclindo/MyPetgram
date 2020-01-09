import React from 'react';
import { Category } from '../Category';
import {List, Item} from "./style.js"

const ListOfCategories = () => {
  return ( 
    <List>
      {
        [1,2,3].map((category)=>(
          <Item key={category}>
            <Category />
          </Item>
        ))
      }
    </List>
   );
}
 
export default ListOfCategories;