import { Icon, SearchDiv, SearchInput } from "./styles";

import icon from '@/public/svgs/search.svg'

export default function SearchBar() {
    return (
        <SearchDiv>
            <SearchInput title="text" placeholder="Quer ajuda na procura? Pesquise aqui" />
            <Icon src={icon} width={30} height={30} alt="icone"/>
        </SearchDiv>
    )
}