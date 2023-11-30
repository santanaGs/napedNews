import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

` 

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;   
    }
`

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    color: #FEFBFB;
    font-family: Lexend Deca;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.75rem; /* 125% */
    width: 29rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: normal; 
        width: 19.5rem;
    }
`

export const SubTitle = styled.p`
    color: #C4C4C4;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.125rem; /* 170% */
    width: 30.9375rem;
    margin-top: 1rem;
    margin-bottom: 2.88rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 140%; /* 1.4rem */
        width: 19.5rem;
        margin-bottom: 2rem;
    }
`

export const LinkS = styled(Link)`
    color: #FEFBFB;
    text-align: center;
    font-family: Lexend Deca;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.125rem; /* 188.889% */
    border-radius: 0.3125rem;
    background: #8257E6;
    padding: .6rem 1rem;
    width: 10rem;
    text-decoration: none;
`

export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.66rem;
`

export const Description = styled.p`
    color: #C4C4C4;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem; /* 150% */
    width: 18.6rem;
`

export const ImageS = styled(Image)`
    @media screen and (max-width: 768px) {
        width: 19.41231rem;
        height: 9.957rem;
        flex-shrink: 0;
    }
`