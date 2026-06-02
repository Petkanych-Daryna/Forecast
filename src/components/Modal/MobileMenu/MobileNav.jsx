import React from "react";
import styles from "./MobileMene.module.css";

export function MobileNav() {
  return (
    <nav className={styles.navList}>
      <ul className={styles.list}>
        <li>Who we are</li>
        <li>Contacts</li>
        <li>Menu</li>
      </ul>
    </nav>
  );
}