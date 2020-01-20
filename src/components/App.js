import React, { Children } from 'react';
import { Router } from '@reach/router';
import ListOfCategories from './ListOfCategories';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Logo } from './Logo';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { Navbar } from './Navbar/index';
import { User } from '../pages/User';
import { Favs } from '../pages/Favs';
import { NotRegisteredUser } from '../pages/NotRegisteredUser';
import Context from '../Context';

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path="/" />
      <Home path="/pet/:categoryId" />
      <Detail path="/detail/:detailId" />
    </Router>
    <Context.Consumer>
      {({ isAuth }) =>
        isAuth ? (
          <Router>
            <Favs path="/favs" />
            <User path="/user" />
          </Router>
        ) : (
          <Router>
            <NotRegisteredUser path="/favs" />
            <NotRegisteredUser path="/user" />
          </Router>
        )
      }
    </Context.Consumer>

    <Navbar />
  </>
);

export default App;
