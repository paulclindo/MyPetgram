/*eslint-disable*/

import React from 'react';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../components/ListOfCategories/index';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';

export default ({ categoryId }) => (
  <>
    <Helmet>
      <title>Petgram - The best app for your pet photos</title>
      <meta
        name="description"
        content="With Petgram you will find some cool and pretty pet photos"
      />
    </Helmet>

    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </>
);
