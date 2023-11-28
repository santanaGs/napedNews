// Imports
import styled from 'styled-components';

// Interface
interface navProps{
    active: boolean;
}

// Components
export const NavBar = styled.nav`
    width: min(90%, 1119px);
    margin: 0 auto;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Nav = styled.ul<navProps>`
    display: flex;
    gap: 3.75rem;
    list-style: none;
    transition: .6s;

    @media (max-width: 768px){
        min-height: 100vh;
        background-color: rgba(20, 0, 36, 0.821);
        position: fixed;
        top: 0px;
        left: 0;
        flex: 1 1 0%;
        z-index: 10;

        flex-direction: column;
        width: 100%;
        gap: 2rem;
        padding: 3rem;

        transform: translateX(${props => props.active ? '-700px' : '0px'});
    }
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

    @media (max-width: 768px){
        display: none;
    }
`

export const DivS = styled.div`
    display: flex;
    align-items: center;
    gap: 6.5rem;
`

export const Menu = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    right: 3%;
    top: 3%;
`

export const MenuInt = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    right: 7%;
    top: 4%;
`

export const Close = styled.p`
    color: #FEFBFB;
    font-family: Lexend Deca;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`