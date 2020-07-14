import React from 'react';
import ghSocial from '../img/gh-social.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; Wojtek Szczawiński</p>
      <a
        className={styles.socialLink}
        href="https://github.com/wszczawinski"
        target="blank"
        rel="noopener noreferrer"
      >
        <img className={styles.socialImage} src={ghSocial} alt="github-link" />
      </a>
    </footer>
  );
}
