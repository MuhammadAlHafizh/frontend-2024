import { styled } from "styled-components";

const NavbarStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1rem;
    color: white;

    nav {
        display: flex;
        flex-direction: column;
    }

    .navbar-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-brand {
        margin-bottom: 1rem;
        font-size: ${({ theme }) => theme.sizes.xxl.fontSize}
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    .navbar-list-hidden {
        display: none;
    }

    .navbar-item {
        margin-bottom: 1rem;
    }

    .navbar-link {
        text-decoration: none;
        color: #fff;
    }

    .toggle-button {
        background: none;
        border: none;
        cursor: pointer;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        nav {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .navbar-brand {
            margin-bottom: 0;
        }

        ul {
            flex-direction: row;
        }

        .navbar-item {
            margin: 0 1rem;
        }

        .navbar-list-hidden {
            display: flex;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        /* Custom styles for larger screens can be added here */
    }
`;

export default NavbarStyled;
