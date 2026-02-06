import Features from "../components/ourFeatures/features";
import Hero from "../components/heroSection/hero";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Hero />
      <section className={styles.missionSection}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <Features />
      </section>

      <section className={styles.contactSection}>
        <div className={styles.overlay}></div>

        <div className={styles.contactContainer}>
          <div className={styles.left}>
            <h2>Have a Questions?</h2>
            <h3>Get in Touch</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>

            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Name" />
              </div>

              <div className={styles.inputGroup}>
                <input type="email" placeholder="Email Address" />
              </div>

              <div className={styles.inputGroup}>
                <textarea placeholder="Your Message"></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className={styles.right}>
            <div className={styles.infoCard}>
              <span>📞</span>
              <p>0123456789</p>
            </div>

            <div className={styles.infoCard}>
              <span>✉️</span>
              <p>example@gmail.com</p>
            </div>

            <div className={styles.infoCard}>
              <span>📍</span>
              <p>Bookshop St, Cairo, Egypt</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
