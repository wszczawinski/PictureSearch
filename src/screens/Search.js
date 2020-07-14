import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import Pagination from '../components/Pagination';
import { useLocation } from 'react-router-dom';

export default function Search() {
  let location = useLocation();
  let [results, setResults] = useState(location.state.pictures);

  useEffect(() => {
    setResults(location.state.pictures);
  }, [location]);

  return (
    <div>
      <SearchBar />
      <section className={styles.searchResults}>
        {results.map(item => (
          <SearchResult key={item.id} picture={item} />
        ))}
      </section>
      <Pagination />
    </div>
  );
}
