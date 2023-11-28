import Image from "next/image";
import styled from "styled-components";

export const FooterS = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 768px){
        padding-bottom: 5rem;
    }
`

export const Logo = styled(Image)`

`

export const FooterText = styled.p`
    color: #C4C4C4;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    width: 500px;

    @media screen and (max-width: 768px){
        width: 19.5rem;
    }
`

