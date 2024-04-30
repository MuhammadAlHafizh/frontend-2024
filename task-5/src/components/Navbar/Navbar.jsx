import styles from './Navbar.module.css';

function Navbar(){
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h3 className={styles.navbar__brand}>Movie App</h3>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>Film</li>
                    <li className={styles.navbar__item}>Serial TV</li>
                    <li className={styles.navbar__item}>Orang</li>
                    <li className={styles.navbar__item}>More</li>
                    <li className={styles.navbar__item}>Begabung Dengan Kami</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
