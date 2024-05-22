import styles from './Footer.module.css';

function Footer(){
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__live}>Movie App</h2>
                <p className={styles.footer_author}>Created By Muhammad Al Hafizh</p>
            </footer>
        </div>
    );
}

export default Footer;
