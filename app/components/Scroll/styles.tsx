// Imports
import styled from "styled-components";

// Styled Components
export const SectionS = styled.section`
    margin-top: 3.13rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`


export const ScrollView = styled.div`
    overflow-y: scroll;
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 2.19rem;
    max-height: 54.875rem;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: -10%;
    }
    
`

export const DivS = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
`

export const NewsTitle = styled.h3`
    color: #FEFBFB;
    font-family: Lexend Deca;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem; /* 83.333% */
    border-bottom: 3px solid #8257E6;
    width: max-content;
    margin-top: -.5rem;
`

export const DivR = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`