import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar/index';
// import { Favs } from '../pages/Favs';
import { Context } from './Context';
import { Loading } from './components/Loader/index';

const Favs = React.lazy(() => import('./pages/Favs'));
const Detail = React.lazy(() => import('./pages/Detail'));
const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const User = React.lazy(() => import('./pages/User'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default App;
