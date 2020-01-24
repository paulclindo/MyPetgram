import React from 'react';
import { PropTypes } from 'prop-types';
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
    })
  ),
};
