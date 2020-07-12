import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import { useLocation } from 'react-router-dom';

export default function Search() {
  let location = useLocation();
  let [results, setResults] = useState(location.state.pictures);

  useEffect(() => {
    setResults(location.state.pictures);
  }, [location]);

  return (
    <div>
      <h1>Search</h1>
      <SearchBar />
      <h2>Results</h2>
      <section>
        {results.map(item => (
          <SearchResult key={item.id} picture={item} />
        ))}
      </section>
    </div>
  );
}
