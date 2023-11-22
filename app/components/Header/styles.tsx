// Imports
import styled from 'styled-components';

// Components
export const NavBar = styled.nav`
    width: min(90%, 1119px);
    margin: 0 auto;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Nav = styled.ul`
    display: flex;
    gap: 3.75rem;
    list-style: none;
`

export const NavItems = styled.li`

`

export const NavLink = styled.a`
    text-decoration: none;
    color: #C4C4C4;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-bottom: 0.125rem solid transparent;

    transition: .3s;

    &:hover{
        color: #FEFBFB;
        border-bottom: 0.125rem solid #8257E6;
    }
`

export const Account = styled.a`
    border: 1px solid #8257E6;
    text-decoration: none;
    color: #FEFBFB;
    font-family: Lexend Deca;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0.3125rem 1.25rem;
    border-radius: 1.875rem;
`

export const DivS = styled.div`
    display: flex;
    align-items: center;
    gap: 6.5rem;
`