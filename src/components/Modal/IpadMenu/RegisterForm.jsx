import React, { useState } from "react";
import { FormInput } from "./FormInput";
import styles from "./AuthModal.module.css";

export function RegisterForm({ onRegister, onClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    if (!email.includes("@") || !email.includes(".", email.indexOf("@"))) {
      setError("Please enter a valid e-mail address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    onRegister(username);
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && (
        <p
          className={styles.errorText}
          style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}
        >
          {error}
        </p>
      )}

      <FormInput
        label="Username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <FormInput
        label="E-Mail"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormInput
        label="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className={styles.submitBtn}>
        Sign up
      </button>
    </form>
  );
}
