import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Logo } from './Logo';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { Navbar } from './Navbar/index';
import { User } from '../pages/User';
import { Favs } from '../pages/Favs';
import { NotRegisteredUser } from '../pages/NotRegisteredUser';
import { Context } from '../Context';
import { NotFound } from '../pages/NotFound';

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs/" to="/login" noThrow />}
        {!isAuth && <Redirect from="/user/" to="/login" noThrow />}
        {isAuth && <Redirect from="login" to="/" noThrow />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <Navbar />
    </>
  );
};

export default App;
