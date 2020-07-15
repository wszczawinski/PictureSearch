import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchAPI } from '../services/fetchService';
import styles from './SearchBar.module.scss';
import errorPic from '../img/error.png';

export default function SearchBar({
  currentPage,
  currentQuery,
  changePage,
  changeTotal,
}) {
  let [pictures, setPictures] = useState();
  let [page, setPage] = useState(currentPage);
  let [query, setQuery] = useState(currentQuery ? currentQuery : null);
  let [errorMessage, setErrorMessage] = useState();
  let [totalPages, setTotalPages] = useState();

  const queryInput = useRef(null);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(queryInput.current.value);
    sessionStorage.setItem('query', queryInput.current.value);
    if (query) {
      changeTotal(totalPages);
      changePage(1);
    }
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (query !== null) {
      fetchAPI(query, page).then(results => {
        if (results[0].length !== 0 && Array.isArray(results[0])) {
          setPictures(results[0].map(result => result));
          setTotalPages(results[1]);
          setErrorMessage();
        } else if (results[0].length === 0) {
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
