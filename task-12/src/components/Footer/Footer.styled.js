import { styled } from "styled-components";

const FooterStyled = styled.div`
    background-color: ${({theme})=>theme.colors.black};
    color: #fff;
    padding: 1rem;
    text-align: center;

    h2{
        font-size: ${({theme})=>theme.sizes.xxl.fontSize};
        padding: ${({theme})=>theme.sizes.xxl.padding};
    }


    p{
        font-size: ${({theme})=>theme.sizes.sm.fontSize};
        padding: ${({theme})=>theme.sizes.sm.padding};
    }

`;

export default FooterStyled;
