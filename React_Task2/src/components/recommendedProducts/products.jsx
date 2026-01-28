import styles from "./products.module.css";

const Products = () => {
  return (
    <section className={styles.productsSection}>
      <h2 className={styles.heading}>Recommended For You</h2>

      <div className={styles.productsGrid}>
        <div className={styles.card}>
          <img
            src="Richdad.png"
            alt="Rich Dad Poor Dad"
            className={styles.bookImage}
          />

          <div className={styles.info}>
            <h3>Rich Dad And Poor Dad</h3>
            <p className={styles.author}>Author: Robert T. Kiyosaki</p>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ultrices est, aliquam in justo varius.
            </p>

            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                <img src="yellowstar.png" alt="star" />
                <img src="yellowstar.png" alt="star" />
                <img src="yellowstar.png" alt="star" />
                <img src="yellowstar.png" alt="star" />
                <img src="star 5.png" alt="star" />
              </div>
              <span className={styles.review}>(180 Review)</span>
            </div>

            <p className={styles.price}>$30.00</p>

            <div className={styles.actions}>
              <button className={styles.cartBtn}>
                Add To Cart
                <img src="shopping-cart.png" alt="cart" />
              </button>
              <button className={styles.wishlistBtn}>
                <img src="heart.png" alt="wishlist" />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="DesignofBooks.png"
            alt="The Design Of Books"
            className={styles.bookImage}
          />

          <div className={styles.info}>
            <h3>The Design Of Books</h3>
            <p className={styles.author}>Author: Debbie Berne</p>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ultrices est, aliquam in justo varius.
            </p>

            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                <img src="yellowstar.png" alt="star" />
                <img src="yellowstar.png" alt="star" />
                <img src="yellowstar.png" alt="star" />
                <img src="yellowstar.png" alt="star" />
                <img src="star 5.png" alt="star" />
              </div>
              <span className={styles.review}>(210 Review)</span>
            </div>

            <p className={styles.price}>$40.00</p>

            <div className={styles.actions}>
              <button className={styles.cartBtn}>
                Add To Cart
                <img src="shopping-cart.png" alt="cart" />
              </button>
              <button className={styles.wishlistBtn}>
                <img src="heart.png" alt="wishlist" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
