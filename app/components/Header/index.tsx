// Imports
import Image from "next/image"

// Styled Components
import { Account, DivS, Nav, NavBar, NavItems, NavLink } from "./styles"

// Images
import logo from '@/public/svgs/Naped.svg'

const Header: React.FC = () => {
    return (
        <NavBar>
            <Image
                alt='Logo da pagina'
                src={logo}
                width={79}
                height={30}
            />
            <DivS>
                <Nav>
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