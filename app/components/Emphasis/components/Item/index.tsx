import Link from "next/link";

import {
    ButtonS,
    Content,
    Description,
    FirstContent,
    Linear,
    LinkS
} from "./styles";

// Interface 
interface newsProps{
    image: string;
    id: number;
    categorie: string;
}

const Item: React.FC<newsProps> = (props: newsProps) => {
    return (
        <Content>
            <LinkS href={`/news/${props.categorie}/${props.id}`}>
                <FirstContent image={props.image }>
                    <Linear>
                        <ButtonS>Lorem</ButtonS>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
                        </Description>
                    </Linear>
                </FirstContent>
            </LinkS>
        </Content>
    )
}

export default Item;