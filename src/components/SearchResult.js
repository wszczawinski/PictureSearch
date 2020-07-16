import React, { useState } from 'react';
import styles from './SearchResults.module.scss';
import ModalWindow from './ModalWindow';

export default function SearchResult({ picture }) {
  const [showModal, setShowModal] = useState(false);

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
      <button
        type="button"
        className={styles.resultPictureBtn}
        onClick={() => setShowModal(true)}
      >
        <img
          className={styles.resultPicture}
          src={picture.urls.small}
          alt="search-result"
        />
      </button>

      {showModal && (
        <ModalWindow
          url={picture.urls.regular}
          link={picture.links.html}
          onCloseRequest={() => setShowModal(false)}
        />
      )}
    </article>
  );
}
