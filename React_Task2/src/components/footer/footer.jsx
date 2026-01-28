import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.navSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <nav className={styles.navLinks}>
              <a href="/" className={styles.navLink}>
                Home
              </a>
              <a href="/books" className={styles.navLink}>
                Books
              </a>
              <a href="/about" className={styles.navLink}>
                About Us
              </a>
              <a href="/shop" className={styles.navLink}>
                Bookshop
              </a>
            </nav>
          </div>

          <div className={styles.companySection}>
            <h3 className={styles.sectionTitle}>Our Company</h3>
            <p className={styles.companyDescription}>
              We are passionate about connecting readers with their next
              favorite book. Explore our curated collection of titles across all
              genres.
            </p>
            <div className={styles.developerInfo}>
              <span>Developed By</span>
              <span className={styles.companyName}>EraaSoft</span>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Subscribe to our newsletter for new arrivals and promotions.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.copyrightSection}>
          <p className={styles.copyrightText}>
            © {currentYear} Bookshop. All Rights Reserved.
          </p>
          <p className={styles.rightsText}>
            All Copy Rights Reserved @{currentYear} EraaSoft
          </p>
          <div className={styles.socialLinks}>
            <a href="" className={styles.socialLink} aria-label="Facebook">
              <img src="facebook.png" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="instagram">
              <img src="instagram.png" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="youtube">
              <img src="youtube.png" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="x">
              <img src="x.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
