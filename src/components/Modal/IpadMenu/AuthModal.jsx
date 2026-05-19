import React, { useState } from "react";
import styles from "./AuthModal.module.css";

export function AuthModal({ onClose, onRegister }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onRegister(username); 
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Sign up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>Username</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className={styles.label}>E-Mail</label>
          <input className={styles.input} type="email" placeholder="E-mail" required />

          <label className={styles.label}>Password</label>
          <input className={styles.input} type="password" placeholder="Password" required />

          <button type="submit" className={styles.submitBtn}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}