import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
function Navbar(){
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h3 className={styles.navbar__brand}>
                    <Link to="/">
                        Movie App
                    </Link>
                </h3>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/create">Add Movie</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/popular">Popular</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/now-playing">Now Playing</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/top-rated">Top Rated</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
