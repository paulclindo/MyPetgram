import React from 'react';
import { Link, Grid, Image } from './style';

export const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {favs.map(fav => (
      <Link key={fav.id} to={`/detail/${fav.id}`}>
        <Image alt="" src={fav.src} />
      </Link>
    ))}
  </Grid>
);
