import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchAPI } from '../services/fetchService';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  let [pictures, setPictures] = useState();
  let [page] = useState(1);
  let [query, setQuery] = useState('');
  const queryInput = useRef(null);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };

  useEffect(() => {
    if (query !== '') {
      fetchAPI(query, page).then(results => {
        setPictures(results.map(result => result));
      });
    }
  }, [query, page]);

  useEffect(() => {
    if (pictures) {
      history.push({
        pathname: '/search',
        state: { pictures: pictures },
      });
    }
  }, [pictures, history]);

  return (
    <section className={styles.searchBox}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <input
            type="search"
            placeholder="Search for.."
            className={styles.input}
            ref={queryInput}
          />
        </label>
      </form>
    </section>
  );
}
