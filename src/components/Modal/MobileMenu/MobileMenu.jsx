import React, { useState } from 'react';
import { AuthModal } from '../IpadMenu/AuthModal';
import styles from "./MobileMene.module.css";

export function MobileMenu({ isOpen }) {
  const [mobileUser, setMobileUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.isOpen : ""}`}>
      <div className={styles.content}>
        <nav className={styles.navList}>
          <ul className={styles.list}>
            <li>Who we are</li>
            <li>Contacts</li>
            <li>Menu</li>
          </ul>
        </nav>
        
        <div className={styles.userSection}>
          <div className={styles.profileIcon}>
            <img className={styles.iconPlaceholder} src="./src/img/humen.png" alt="profile" />
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
      </div>

      {isAuthOpen && (
        <AuthModal 
          onClose={() => setIsAuthOpen(false)} 
          onRegister={(name) => setMobileUser(name)} 
        />
      )}
    </div>
  );
}