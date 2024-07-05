import styles from "./Navbar.module.css"
import ToggleButton from '../MenuButton/MenuButton'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar(){
    const [isShow, setIsShow] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Mengatur lebar jendela browser saat perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Memperbarui tampilan list berdasarkan ukuran jendela browser
    useEffect(() => {
        if (windowWidth < 768) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    }, [windowWidth]);
    
    function handleClick(){
        if (isShow == true){
            setIsShow(false);
        }else{
            setIsShow(true);
        }
    }

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>  
                <div className={styles.navbar__left}>
                    <h2 className={styles.navbar__brand}>Movie App</h2>
                    <ToggleButton onClick={handleClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            color="white"
                            >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </ToggleButton>
                </div>
                <div>
                <ul className={isShow ? styles.navbar__list :styles.navbar__list_hidden }>
                        <li className={styles.navbar__item}>
                            <Link to={`/`} className={styles.navbar__link}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to={`/movie/create`} className={styles.navbar__link}>
                                Add Movie
                            </Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to={`/movie/popular`} className={styles.navbar__item}>
                                Popular
                            </Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to={`/movie/now`} className={styles.navbar__link}>
                                Now Playing
                            </Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to={`/movie/top`} className={styles.navbar__link}>
                                Top Rated
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
    
}

export default Navbar