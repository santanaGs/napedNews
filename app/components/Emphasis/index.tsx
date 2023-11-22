import Link from "next/link";
import Item from "./components/Item";
import {
    ButtonS,
    Content,
    Description,
    DivSTwo,
    FirstContent,
    Linear,
    LinkS
} from "./styles";


const Emphasis: React.FC = () => {
    return (
        <Content>
            <LinkS href="/news/1">
                <FirstContent image="https://imgur.com/bykBdui.png">
                    <Linear>
                        <ButtonS>Lorem</ButtonS>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
                        </Description>
                    </Linear>
                </FirstContent>
            </LinkS>
            <DivSTwo>
                <Item id={2} image="https://imgur.com/hrOWAKX.png" categorie="anime"/>
                <Item id={3} image="https://imgur.com/K8CsCsK.png" categorie="jogo"/>
            </DivSTwo>
        </Content>
    )
}

export default Emphasis;