import React from "react";
import styles from "./MobileMene.module.css";

export function MobileUserSection({ mobileUser, setIsAuthOpen }) {
  return (
    <div className={styles.userSection}>
      <div className={styles.profileIcon}>
        <img
          className={styles.iconPlaceholder}
          src="./src/img/humen.png"
          alt="profile"
        />
      </div>

      {mobileUser ? (
        <span className={styles.userNameText}>{mobileUser}</span>
      ) : (
        <button
          className={styles.signupBtn}
          onClick={() => setIsAuthOpen(true)}
        >
          Sign Up
        </button>
      )}
    </div>
  );
}
