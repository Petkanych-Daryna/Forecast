import React from "react";
import styles from "./Header.module.css";

export function Navigation() {
  return (
    <nav className={styles.desktopNav}>
      <a href="#who-we-are" className={styles.navLink}>
        Who we are
      </a>
      <a href="#contacts" className={styles.navLink}>
        Contacts
      </a>
    </nav>
  );
}
