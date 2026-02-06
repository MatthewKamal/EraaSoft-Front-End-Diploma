import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              About us
            </NavLink>
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
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Books
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            About us
          </NavLink>
          <button className={`${styles.btn} ${styles.login}`}>Log in</button>
          <button className={`${styles.btn} ${styles.signup}`}>Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
