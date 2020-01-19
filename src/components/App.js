import React from 'react';
import ListOfCategories from './ListOfCategories';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Logo } from './Logo';
import { PhotoCardWithQuery } from './../containers/PhotoCardWithQuery';
import { Home } from './../pages/Home';
import { Router } from '@reach/router'

const App = () => {
  // window.location.search - for query in the url -> ?detail=1
  const urlParams = new window.URLSearchParams(window.location.search)
  // detailId get the value of the detail
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          :
          <Router>
            <Home path="/" />
            <Home path="/pet/:categoryId" />
          </Router>
      }

    </>
  )
};

export default App;
