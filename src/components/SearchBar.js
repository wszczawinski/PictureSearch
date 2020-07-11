import React from 'react';
import { fetchAPI } from '../services/fetchService';

export default function SearchBar() {
  fetchAPI('keyword', 1);
  return (
    <section>
      <input type="text" placeholder="Search for.." />
    </section>
  );
}
