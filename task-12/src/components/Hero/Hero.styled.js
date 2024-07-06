import { styled } from "styled-components";

const HeroStyled = styled.div`
    margin: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }

    h2 {
        color: black;
        margin-bottom: 1rem;
        font-size: ${({ theme }) => theme.sizes.xxl.fontSize};
        padding: ${({ theme }) => theme.sizes.xxl.padding};
    }

    h3 {
        color: black;
        margin-bottom: 1rem;
        font-size: ${({ theme }) => theme.sizes.xl.fontSize};
        padding: ${({ theme }) => theme.sizes.xl.padding};
    }

    p {
        color: #64748b;
        margin-bottom: ${({ theme }) => theme.sizes.md.fontSize};
        padding: ${({ theme }) => theme.sizes.md.padding};
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    /* Medium screen */
    @media (min-width: 768px) {

    }

    /* Large screen */
    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;

        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        .hero__left {
            flex-basis: 40%;
        }

        .hero__right {
            flex-basis: 60%;
            text-align: right;
        }
    }
`;

export default HeroStyled;
