import styles from "./features.module.css";

const Features = () => {
  return (
    <section className={styles.parentContainer}>
      <div className={styles.childContainers}>
        <img src="Vector.png" />
        <h2 className={styles.title}>Fast & Reliable Shipping</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Mauris et <br /> ultricies est.
          Aliquam in justo varius,
          <br /> sagittis neque ut, malesuada leo.
        </p>
      </div>
      <div className={styles.childContainers}>
        <img src="Vector (1).png" />
        <h2 className={styles.title}>Secure Payment</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Mauris et <br /> ultricies est.
          Aliquam in justo varius,
          <br /> sagittis neque ut, malesuada leo.
        </p>
      </div>
      <div className={styles.childContainers}>
        <img src="Vector (2).png" />
        <h2 className={styles.title}>Easy Returns</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Mauris et <br /> ultricies est.
          Aliquam in justo varius,
          <br /> sagittis neque ut, malesuada leo.
        </p>
      </div>
      <div className={styles.childContainers}>
        <img src="Vector (3).png" />
        <h2 className={styles.title}>24/7 Customer Support</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Mauris et <br /> ultricies est.
          Aliquam in justo varius,
          <br /> sagittis neque ut, malesuada leo.
        </p>
      </div>
    </section>
  );
};

export default Features;
