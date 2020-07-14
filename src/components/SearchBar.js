import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchAPI } from '../services/fetchService';
import styles from './SearchBar.module.scss';
import errorPic from '../img/error.png';

export default function SearchBar() {
  let [pictures, setPictures] = useState();
  let [page] = useState(1);
  let [query, setQuery] = useState('');
  let [errorMessage, setErrorMessage] = useState();
  const queryInput = useRef(null);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };

  useEffect(() => {
    if (query !== '') {
      fetchAPI(query, page).then(results => {
        if (results.length !== 0 && Array.isArray(results)) {
          setPictures(results.map(result => result));
        } else if (results.length === 0) {
          setErrorMessage('Try another keyword');
        } else {
          setErrorMessage('Check your internet connection');
        }
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
    <>
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
      <section className={styles.errorMessage}>
        {errorMessage && <img className={styles.errorImage} src={errorPic} alt="error" />}
        <p>{errorMessage}</p>
      </section>
    </>
  );
}
