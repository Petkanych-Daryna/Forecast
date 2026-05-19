import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerList}>
      <div className={styles.footerAddress}>
        <img className={styles.footerLogo} src="./src/img/logo.png" alt="logo" />
        <div className={styles.footerInfo}>
          <h5 className={styles.footerTitle}>Address</h5>
          <p className={styles.footerText}>Svobody str. 35</p>
          <p className={styles.footerText}>Kyiv</p>
          <p className={styles.footerText}>Ukraine</p>
        </div>
      </div>
        <div className={styles.contactList}>
          <h5 className={styles.footerTitle}>Contact us</h5>
          <ul className={styles.contact}>
            <li className={styles.contactItem}>
              <a href="https://www.instagram.com/">
                <img className={styles.footerImg} src="./src/img/instagram.png" alt="" />
              </a>
            </li>
            <li className={styles.contactList}>
              <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebo ok.com%2F%3Flocale%3Duk_UA">
                <img className={styles.footerImg} src="./src/img/facebook.png" alt="" />
              </a>
            </li>
            <li className={styles.contactList}>
              <a href="https://www.whatsapp.com/?lang=uk">
                <img className={styles.footerImg} src="./src/img/whatsapp.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
}
