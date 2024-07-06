import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarStyled from "./Navbar.styled.js";
import ToggleButton from '../MenuButton/MenuButton';

function Navbar() {
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

    const handleClick = () => {
        setIsShow(!isShow);
    };

    return (
        <NavbarStyled>
            <nav>
                <div className="navbar-left">
                    <h2 className="navbar-brand">Movie App</h2>
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
                    <ul className={isShow ? "navbar-list" : "navbar-list-hidden"}>
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">
                                Home
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/movie/create" className="navbar-link">
                                Add Movie
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/movie/popular" className="navbar-link">
                                Popular
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/movie/now" className="navbar-link">
                                Now Playing
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/movie/top" className="navbar-link">
                                Top Rated
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarStyled>
    );
}

export default Navbar;
