import React, { useState } from "react";
import { MobileMenu } from "../Modal/MobileMenu/MobileMenu";
import { AuthModal } from "../Modal/IpadMenu/AuthModal";
import cont from "../container.module.css";
import styles from "./Header.module.css";
import logo from "../../img/logo.png"
import humen from "../../img/humen.png"

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [userName, setUserName] = useState(null); 

  return (
    <header className={`${styles.header} ${cont.container}`}>
      <div className={styles.headerTop}>
        <div className={styles.logo}>
          <img src={logo} alt="24/7 forecast" />
        </div>

        <div className={styles.rightSide}>
          <nav className={styles.desktopNav}>
            <a href="#who-we-are" className={styles.navLink}>Who we are</a>
            <a href="#contacts" className={styles.navLink}>Contacts</a>
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>

          <div className={styles.desktopAuth}>
            {userName ? (
              <span className={styles.userNameDisplay}>{userName}</span>
            ) : (
              <button className={styles.signUpBtn} onClick={() => setIsAuthOpen(true)}>
                Sign Up
              </button>
            )}
            <div className={styles.avatar}>
              <img src={humen} alt="User profile" />
            </div>
          </div>
        </div>
      </div>

    
      <MobileMenu 
        isOpen={isOpen} 
        userName={userName} 
        onOpenAuth={() => {
          setIsAuthOpen(true);
          setIsOpen(false);
        }} 
      />

      {isAuthOpen && (
        <AuthModal 
          onClose={() => setIsAuthOpen(false)} 
          onRegister={(name) => setUserName(name)} 
        />
      )}
    </header>
  );
}