import React from 'react';
import { GetFavorites } from '../containers/GetFavorites';
import { Layout } from '../components/Layout/index';

export const Favs = () => (
  <>
    <Layout
      title="Your Favorites"
      subtitle="Here you can find your favorites pet photos"
    >
      <GetFavorites />
    </Layout>
  </>
);
