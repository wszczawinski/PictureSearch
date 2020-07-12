import React from 'react';
import styles from './Home.module.scss';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchBar />
    </main>
  );
}
