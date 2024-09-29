import React from 'react'
import styles from './index.module.css';
export const Header = () => {
  
  return (
    <header className={styles.header}>
      <h1>Blog</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
