// Imports
import Link from 'next/link';
import styled from 'styled-components';

// Interface 
interface newsProps{
    image: string;
}

// Styled Components
export const Content = styled.div`
    display: flex;
    gap: 1.25rem;
    margin-top: 5rem;
`

export const FirstContent = styled.div<newsProps>`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: .3s;
    scale: 1;

    &:hover{
        scale: 1.03;
    }
`

export const Linear = styled.div`
    background: linear-gradient(0deg, #13131F 0%, rgba(19, 19, 31, 0.00) 100%);
    padding: 1rem;  
    height: 21.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Description = styled.p`
    color: #FEFBFB;
    font-family: Lexend Deca;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.125rem; /* 141.667% */
    width: 43.8125rem;
`

export const DivSTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

export const LinkS = styled(Link)`
    text-decoration: none;
`

export const ButtonS = styled.p`
    border-radius: 0.1875rem;
    background: #8257E6;
    color: #FEFBFB;
    text-align: right;
    font-family: Lexend Deca;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 5rem;
    text-align: center;
    padding: .3rem;
`