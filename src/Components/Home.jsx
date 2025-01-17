import React from 'react';
import styles from "../Styles/Home.module.css";
import { Link } from 'react-router-dom';



function Home() {

  return (
    <div className={styles.container}>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Find the Best the price on Books</h1>
        <p className={styles.heroDescription}>
          Easily compare prices from multiple platforms and save on your next book purchase.
        </p>
        <Link className={styles.heroButton} to={'/Books'}>Start Comparing</Link>
      </section>


      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>How It Works</h2>
        <ul className={styles.featuresList}>
          <li>Compare prices from various retailers.</li>

          <li>Make informed decisions quickly and easily.</li>
        </ul>
      </section>




 



    </div>
  );
}

export default Home;
