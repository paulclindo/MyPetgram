import React from 'react';
import ListOfCategories from './ListOfCategories';
import { GlobalStyle } from '../styles/GlobalStyles';
import { PhotoCard } from './PhotoCard';
import { Logo } from './Logo';
import { photos } from '../../api/db.json';

const photoOne = photos[1];

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <PhotoCard {...photoOne}></PhotoCard>
    <PhotoCard {...photoOne}></PhotoCard>
    <PhotoCard {...photoOne}></PhotoCard>
    <PhotoCard {...photoOne}></PhotoCard>
  </>
);

export default App;
