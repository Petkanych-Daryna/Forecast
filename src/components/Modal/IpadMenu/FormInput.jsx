import React from "react";
import styles from "./AuthModal.module.css";

export function FormInput({ label, type = "text", placeholder, ...rest }) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input 
        className={styles.input} 
        type={type} 
        placeholder={placeholder} 
        required 
        {...rest} 
      />
    </>
  );
}