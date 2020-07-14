import React from 'react';
import styles from './SearchResults.module.scss';

export default function SearchResult({ picture }) {
  console.log(picture);
  return (
    <article className={styles.picture}>
      <div className={styles.user}>
        <img
          className={styles.image}
          src={picture.user.profile_image.small}
          alt=""
          srcset=""
        />
        <p>{picture.user.username}</p>
      </div>
      <img
        className={styles.resultPicture}
        src={picture.urls.small}
        alt="search-result"
        srcSet=""
      />
    </article>
  );
}
