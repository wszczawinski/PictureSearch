import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Search() {
  let location = useLocation();

  useEffect(() => {
    console.log(location.state.pictures);
  });

  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
