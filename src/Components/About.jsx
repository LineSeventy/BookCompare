import React from 'react';

import styles from "../Styles/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Title Name</h1>
        <p className={styles.description}>
          Welcome to [Project Name]! This platform is designed to help users 
          easily compare prices for books across multiple online and offline
          retailers, ensuring they get the best deals.
        </p>
      </div>
      <div className={styles.others}>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Purpose</h2>
          <p className={styles.text}>
            The purpose of this project is to simplify the process of 
            finding affordable books for students, avid readers, and researchers 
            by consolidating price information from various sources into one 
            convenient place.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Inspiration</h2>
          <p className={styles.text}>
            This project was inspired by the challenges students often face in finding 
            affordable books for their studies. By leveraging technology, 
            we aim to make this process more efficient and accessible.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Team Info</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minus quaerat cum possimus molestias nobis doloribus provident
            veniam voluptas reprehenderit, saepe vero cumque iusto consequatur 
            laborum. Laboriosam officia autem modi iste.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
