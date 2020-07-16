import React, { useEffect, useRef, useCallback } from 'react';
import styles from './ModalWindow.module.scss';

export default function ModalWindow({ url, link, onCloseRequest }) {
  const modal = useRef(null);

  const handleKeyUp = useCallback(
    e => {
      const keys = {
        27: () => {
          e.preventDefault();
          onCloseRequest();
          window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [onCloseRequest]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  }, [handleKeyUp]);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal} ref={modal}>
        <img className={styles.modalImage} src={url} alt="result-in-modal" />
        <a
          className={styles.modalLink}
          href={link}
          target="blank"
          rel="noopener noreferrer"
        >
          Open on Unsplash
        </a>
        <button type="button" className={styles.modalBtn} onClick={onCloseRequest}>
          x
        </button>
      </div>
    </div>
  );
}
