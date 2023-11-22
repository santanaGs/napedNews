import { ButtonS, Content, Description, FirstContent, Linear, LinkS } from "./styles";

// Interface 
interface newsProps{
    image: string;
    id: number;
    description: string;
    categorie: string;
}

export default function Item(props: newsProps) {
    return (
        <Content>
            <LinkS href={`/news/${props.categorie}/${props.id}`}>
                <FirstContent image={props.image}>
                    <Linear>
                        <ButtonS>{props.categorie}</ButtonS>
                        <Description>
                            {props.description}
                        </Description>
                    </Linear>
                </FirstContent>
            </LinkS>
        </Content>
    )
}