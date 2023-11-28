import styled from "styled-components";

export const SectionS = styled.section`
    margin-block: 6.2rem;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3.25rem;
    row-gap: 2.63rem;
    margin-top: 2.45rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 
    }
`