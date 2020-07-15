import React, { useState, useEffect } from 'react';
import styles from './Pagination.module.scss';
import backButton from '../img/back-button.png';
import forwardButton from '../img/forward-button.png';

export default function Pagination({ changePage, currentPage }) {
  let [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <section className={styles.pagination}>
      {page === 1 ? (
        <p className={styles.btn}></p>
      ) : (
        <button
          className={styles.btn}
          onClick={() => {
            changePage(page - 1);
          }}
        >
          <img className={styles.buttonImage} src={backButton} alt="back-button" />
        </button>
      )}

      <p>{page}</p>

      <button
        className={styles.btn}
        onClick={() => {
          changePage(page + 1);
        }}
      >
        <img className={styles.buttonImage} src={forwardButton} alt="forward-button" />
      </button>
    </section>
  );
}
