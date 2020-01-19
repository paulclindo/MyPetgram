import React, { Children } from 'react';
import ListOfCategories from './ListOfCategories';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Logo } from './Logo';
import { PhotoCardWithQuery } from './../containers/PhotoCardWithQuery';
import { Home } from './../pages/Home';
import { Router } from '@reach/router'
import { Detail } from '../pages/Detail'
import { Navbar } from './Navbar/index';
import { User } from './../pages/User';
import { Favs } from './../pages/Favs';
import { NotRegisteredUser } from './../pages/NotRegisteredUser';

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

const App = () => {
  // window.location.search - for query in the url -> ?detail=1
  // const urlParams = new window.URLSearchParams(window.location.search)
  // detailId get the value of the detail
  // const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth ?
              <Router>
                <Favs path="/favs" />
                <User path="/user" />
              </Router>
              :
              <Router>
                <NotRegisteredUser path="/favs" />
                <NotRegisteredUser path="/user" />
              </Router>


        }
      </UserLogged>

      <Navbar />
    </>
  )
};

export default App;
