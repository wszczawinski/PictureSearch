import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import Pagination from '../components/Pagination';
import { useLocation } from 'react-router-dom';

export default function Search() {
  let location = useLocation();
  let [results, setResults] = useState(location.state.pictures);
  let [currentPage, setCurrentPage] = useState(1);
  let [query] = useState(sessionStorage.getItem('query'));
  let [totalPages, setTotalPages] = useState();

  useEffect(() => {
    setResults(location.state.pictures);
  }, [location]);

  const changePage = page => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const changeTotal = total => {
    setTotalPages(total);
  };

  return (
    <div>
      <SearchBar
        changePage={changePage}
        currentPage={currentPage}
        currentQuery={query}
        changeTotal={changeTotal}
      />
      <section className={styles.searchResults}>
        {results.map(item => (
          <SearchResult key={item.id} picture={item} />
        ))}
      </section>
      <Pagination
        changePage={changePage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
