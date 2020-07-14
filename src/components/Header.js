import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logoImage from '../img/logo.png';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoimg} src={logoImage} alt="Search-Logo" />
        <h1 className={styles.logotext}>Picture Search</h1>
      </Link>
    </nav>
  );
}
