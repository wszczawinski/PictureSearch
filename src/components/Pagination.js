import React, { useState } from 'react';
import styles from './Pagination.module.scss';
import backButton from '../img/back-button.png';
import forwardButton from '../img/forward-button.png';

export default function Pagination() {
  let [currentPage, setCurrentPage] = useState(1);

  
  return (
    <section className={styles.pagination}>
      <img className={styles.buttonImage} src={backButton} alt="back-button" />
      <p>{currentPage}</p>
      <img className={styles.buttonImage} src={forwardButton} alt="forward-button" />
    </section>
  );
}
