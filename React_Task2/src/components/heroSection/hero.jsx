import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search" className={styles.input} />

          <img src="mic.png" className={styles.mic} />

          <img src="search.png" className={styles.searchBtn} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
