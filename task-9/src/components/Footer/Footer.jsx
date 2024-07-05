import styles from "./Footer.module.css"
function Footer(){
    return (
        <div className={styles.container}>
            <footer className={styles.footr}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>Created By Muhammad Al Hafizh</p>
            </footer>
        </div>
    );
}

export default Footer
