import { ButtonS, Content, Date, Description, ImageDiv, ImageLinnear, Read, Text, TextDiv } from "./styles";

// Interface 
interface scrollProps{
    image: string;
    title: string | undefined;
    description: string;
    date: string | undefined;
    link: string;
    categorie: string;
}

export default function ScrollItem(props: scrollProps){
    return(
        <Content>
            <ImageDiv image={props.image}>
                <ImageLinnear>

                </ImageLinnear>
            </ImageDiv>
            <TextDiv>
                <Text>{props.title}</Text>
                <Description>{props.description}</Description>
                <Date>{props.date}</Date>
                <Read href={`${props.link}`}>Ler notícia</Read>
            </TextDiv>
            <ButtonS>{props.categorie}</ButtonS>
        </Content>
    )
}