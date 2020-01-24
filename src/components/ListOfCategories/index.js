import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './style.js';
import { Loading } from '../Loader';

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function() {
    setLoading(true);
    const URL = 'https://mypetgram-server.paulclindo.now.sh/categories';
    fetch(URL)
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  // array vacio, porque ya damos por hecho que el dato sera un array, asi que si es un array vacio no se rompera nada
  const [showFixed, setshowFixed] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      if (showFixed !== newShowFixed) setshowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading ? (
        <Loading />
      ) : (
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
