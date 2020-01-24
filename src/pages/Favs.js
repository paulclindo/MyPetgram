/* eslint-disable */
import React from 'react';
import { GetFavorites } from '../containers/GetFavorites';
import { Layout } from '../components/Layout/index';

export default () => (
  <>
    <Layout
      title="Your Favorites"
      subtitle="Here you can find your favorites pet photos"
    >
      <GetFavorites />
    </Layout>
  </>
);
