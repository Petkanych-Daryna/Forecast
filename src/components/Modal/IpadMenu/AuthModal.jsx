import React from "react";
import { RegisterForm } from "./RegisterForm";
import styles from "./AuthModal.module.css";

export function AuthModal({ onClose, onRegister }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Sign up</h2>
        
        <RegisterForm onRegister={onRegister} onClose={onClose} />
        
      </div>
    </div>
  );
}