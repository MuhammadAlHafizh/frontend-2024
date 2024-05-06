
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Menu from './Menu/Menu';


function Navbar(){
    const [isShowMobile, setIsShowMobile] = useState(true);
    const [windowWidthMobile, setWindowWidthMobileMobile] = useState(window.innerWidth);

    // Sets the width of the browser window when the screen size changes
    useEffect(() => {
        const handleResize = () => {
            setWindowWidthMobileMobile(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleans up event listeners when components unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Updates the list display based on the size of the browser window
    useEffect(() => {
        if (windowWidthMobile < 768) {
            setIsShowMobile(false);
        } else {
            setIsShowMobile(true);
        }
    }, [windowWidthMobile]);

    function handleClick(){
        if (isShowMobile == true){
            setIsShowMobile(false);
        }else{
            setIsShowMobile(true);
        }
    }
    return(
        <>
            <div className={styles.navbar__container}>
                <nav className={styles.navbar__section}>
                    <div className={styles.navbar__left}>
                        <p className={styles.navbar__brand}>Covid ID</p>
                        <Menu onClick={handleClick}>
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
                        </Menu>
                    </div>
                    <div className={isShowMobile ? styles.navbar__right : styles.navbar__right_hide}>
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item}>Global</li>
                            <li className={styles.navbar__item}>Indonesia</li>
                            <li className={styles.navbar__item}>Provinsi</li>
                            <li className={styles.navbar__item}>About</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar
