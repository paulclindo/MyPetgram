import React from 'react';
import ListOfCategories from './ListOfCategories';
import { GlobalStyle } from '../styles/GlobalStyles';
import { PhotoCard } from './PhotoCard';
import { Logo } from './Logo';
import ListOfPhotoCards from '../components/ListOfPhotoCards'

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
);

export default App;
