// Imports
import Image from "next/image"
import React, { useState, useEffect } from 'react'

// Styled Components
import { Account, Close, DivS, Menu, MenuInt, Nav, NavBar, NavItems, NavLink } from "./styles"

// Images
import logo from '@/public/svgs/Naped.svg'
import burguer from '@/public/svgs/burguer.svg'

const Header: React.FC = () => {
    // Variables
    const [active, setActive] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Functions
    useEffect(() => {
        function isMobileDevice() {
            return window.matchMedia("(max-width: 768px)").matches;
        }
        if (isMobileDevice()) {
            setIsMobile(true);
            setActive(false);
        } else {
            console.log('NAO É DEVICE')
        }
    }, [])

    // Rendering
    return (
        <NavBar>
            <Image
                alt='Logo da pagina'
                src={logo}
                width={79}
                height={30}
            />
            {isMobile && (
                <Menu onClick={() => { setActive(!active) }}>
                    <Image src={burguer} alt="burguer menu" />
                </Menu>
            )}
            <DivS>
                <Nav active={active}>
                    {isMobile && (
                        <MenuInt onClick={() => { setActive(!active) }}>
                            <Close>X</Close>
                        </MenuInt>
                    )}
                    <NavItems>
                        <NavLink href="/">Home</NavLink>
                    </NavItems>
                    <NavItems>
                        <NavLink href="/">Séries</NavLink>
                    </NavItems>
                    <NavItems>
                        <NavLink href="/">Filmes</NavLink>
                    </NavItems>
                    <NavItems>
                        <NavLink href="/">Animes</NavLink>
                    </NavItems>
                    <NavItems>
                        <NavLink href="/">Games</NavLink>
                    </NavItems>
                </Nav>
                <Account href="/">Miha conta</Account>
            </DivS>
        </NavBar>
    )
}

export default Header