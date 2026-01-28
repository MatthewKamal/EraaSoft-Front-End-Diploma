import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src="bookmark.png" className={styles.logoIcon} />
          <span className={styles.logoText}>Bookshop</span>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#" className={styles.active}>
              Home
            </a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <button className={`${styles.btn} ${styles.login}`}>Log in</button>
        <button className={`${styles.btn} ${styles.signup}`}>Sign Up</button>
      </div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#">Home</a>
          <a href="#">Books</a>
          <a href="#">About us</a>
          <button className={`${styles.btn} ${styles.login}`}>Log in</button>
          <button className={`${styles.btn} ${styles.signup}`}>Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
