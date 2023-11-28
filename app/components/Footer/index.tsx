import { FooterS, FooterText, Logo } from "./styles";

import logo from '@/public/svgs/Naped.svg'

export default function Footer() {
    return (
        <FooterS>
            <Logo src={logo} alt="Logo da empresa"/>
            <FooterText>
            Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários.
            </FooterText>
        </FooterS>
    )
}