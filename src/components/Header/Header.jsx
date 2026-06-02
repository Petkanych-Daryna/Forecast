import React, { useState } from "react";
import { MobileMenu } from "../Modal/MobileMenu/MobileMenu";
import { AuthModal } from "../Modal/IpadMenu/AuthModal";
import { Navigation } from "./Navigation";
import { UserActions } from "./UserActions";
import cont from "../container.module.css";
import styles from "./Header.module.css";
import logo from "../../img/logo.png";

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
          <Navigation />
          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
          <UserActions
            userName={userName}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
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