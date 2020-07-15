import React from 'react';
import styles from './SearchResults.module.scss';

export default function SearchResult({ picture }) {
  return (
    <article className={styles.picture}>
      <div className={styles.user}>
        <img
          className={styles.image}
          src={picture.user.profile_image.small}
          alt="user-avatar"
        />
        <p>{picture.user.username}</p>
      </div>
      <img
        className={styles.resultPicture}
        src={picture.urls.small}
        alt="search-result"
      />
    </article>
  );
}
