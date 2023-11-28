import Link from "next/link";
import styled from "styled-components";

// Interface 
interface imageProps {
    image: string;
}

export const Content = styled.div`
    display: flex;
    gap: 1.12rem;

    position: relative;
`

export const ImageDiv = styled.div<imageProps>`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: .3s;
    scale: 1;

    width: 12.5rem;
    height: 9.4375rem;
    

    &:hover{
        scale: 1.03;
    }

    @media screen and (max-width: 768px){
        width: 9rem;
        height: 6.875rem;
        flex-shrink: 0;
    }
`

export const ImageLinnear = styled.div`
    background: linear-gradient(0deg, #13131F 0%, rgba(19, 19, 31, 0.00) 100%);
    width: 12.5rem;
    height: 9.4375rem;

    @media screen and (max-width: 768px){
        width: 9rem;
        height: 6.875rem;
        flex-shrink: 0;
    }
`

export const TextDiv = styled.div`
width: 24.625rem;
display: flex;
flex-direction: column;
justify-content: space-between;
` 

export const Text = styled.p`
    color: #FEFBFB;
    font-family: Lexend Deca;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 153.846% */
`

export const Description = styled.p`
    color: #C4C4C4;
    font-family: Inter;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 145.455% */
    width: 20.625rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Date = styled.p`
    color: #C4C4C4;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem; /* 200% */
`

export const Read = styled(Link)`
    text-decoration: none;
    border-radius: 0.1875rem;
    background: #8257E6;
    color: #FEFBFB;
    font-family: Inter;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem; /* 181.818% */
    padding:.5rem 1rem;
    width: 6.25rem;
    text-align: center;
    transition: .3s;

    &:hover{
        background: #5e3ea8;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }
`

export const ButtonS = styled.p`
    border-radius: 0.1875rem;
    background: #8257E6;
    color: #FEFBFB;
    text-align: right;
    font-family: Lexend Deca;
    font-size: 0.65rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 4rem;
    text-align: center;
    padding: .2rem;
    position: absolute;
    top: 5%;
    left: 1%;


`