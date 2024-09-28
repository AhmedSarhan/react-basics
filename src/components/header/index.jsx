import React from 'react'
import styles from './index.module.css';
export const Header = () => {
  
  return (
    <header className={styles.header}>
      <h1>Currency Converter</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
