// Imports
import styled from 'styled-components'

// Styled
export const Section = styled.section`
    padding-top: 6rem;

    @media screen and (max-width: 768px) {
        padding-top: 2rem;    
    }
`

export const Title = styled.h1`
    color: #FEFBFB;
    font-family: Lexend Deca;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 19rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const SubTitle = styled.p`
    color: #C4C4C4;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 160% */
    width: 30.75rem;
    margin-top: 0.7rem;

    @media screen and (max-width: 768px) {
        font-size: 0.875rem;
        width: 19.5rem;
        line-height: 140%; /* 1.225rem */
    }
`