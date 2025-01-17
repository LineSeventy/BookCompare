import React from 'react';
import styles from "../Styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.mainContent}>
      <footer className={styles.footer}>
        <p className={styles.footerText}>&copy; 2025 [Your Project Name]. All Rights Reserved.</p>
        <nav className={styles.nav}>
          <a className={styles.navLink} href="/privacy">Privacy Policy</a> | 
          <a className={styles.navLink} href="/terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
