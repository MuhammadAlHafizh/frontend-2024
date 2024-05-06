import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer__container}>
      <footer className={styles.footer__section}>
        <div>
          <h3 className={styles.footer__title}>Covid ID</h3>
          <h4 className={styles.footer__author}>Junior Progammer Muhammad Al Hafizh</h4>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
