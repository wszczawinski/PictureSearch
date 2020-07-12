import React from 'react';

export default function SearchResult({ picture }) {
  return (
    <div>
      <img src={picture.urls.small} alt="" srcSet="" />
    </div>
  );
}
