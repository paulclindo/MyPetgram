/* eslint-disable */

import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
import { Layout } from '../components/Layout/index';

export default ({ detailId }) => (
  <>
    <Layout title="Details" subtitle="">
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  </>
);
