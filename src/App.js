import React from 'react';
import './App.css';
import { fetchAPI } from './services/fetchService';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  fetchAPI('banana', 2);
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        Picture-search
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
