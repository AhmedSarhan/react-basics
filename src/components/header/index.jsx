import styles from './index.module.css';
export const Header = () => {
  
  return (
    <header className={styles.header}>
      <h1>Blog</h1>
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}
