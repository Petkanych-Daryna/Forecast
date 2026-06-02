import React, { useState } from "react";
import { AuthModal } from "../IpadMenu/AuthModal";
import { MobileNav } from "./MobileNav";
import { MobileUserSection } from "./MobileUserSection";
import styles from "./MobileMene.module.css";

export function MobileMenu({ isOpen }) {
  const [mobileUser, setMobileUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.isOpen : ""}`}>
      <div className={styles.content}>
        <MobileNav />

        <MobileUserSection
          mobileUser={mobileUser}
          setIsAuthOpen={setIsAuthOpen}
        />
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
