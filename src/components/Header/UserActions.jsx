import React from "react";
import styles from "./Header.module.css";
import humen from "../../img/humen.png";

export function UserActions({ userName, onOpenAuth }) {
  return (
    <div className={styles.desktopAuth}>
      {userName ? (
        <span className={styles.userNameDisplay}>{userName}</span>
      ) : (
        <button className={styles.signUpBtn} onClick={onOpenAuth}>
          Sign Up
        </button>
      )}
      <div className={styles.avatar}>
        <img src={humen} alt="User profile" />
      </div>
    </div>
  );
}
