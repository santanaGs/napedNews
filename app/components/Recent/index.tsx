import Item from "../Scroll/Item";
import { NewsTitle } from "../Scroll/styles";
import { Grid, SectionS } from "./styles";

// Interface
interface newsProps {
    image: string;
    title?: string;
    description: string;
    date?: string;
    link?: string;
    category: string;
    id: number;
}

const novidades: newsProps[] = [
    {
        image: 'https://imgur.com/VgDtVjq.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'anime',
        id: 122,
    },
    {
        image: 'https://imgur.com/S1J76yV.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'jogo',
        id: 324,
    },
    {
        image: 'https://imgur.com/4Yanfpq.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'série',
        id: 523 ,
    },
    {
        image: 'https://imgur.com/ZHhZ6zr.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'filme',
        id: 122,
    },
    {
        image: 'https://imgur.com/mtug48L.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'anime',
        id: 324,
    },
    {
        image: 'https://imgur.com/2KSJPkM.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'jogo',
        id: 523 ,
    },
]

export default function Recent(){
    return(
        <SectionS>
            <NewsTitle>Notícias mais recentes</NewsTitle>
            <Grid>
            {novidades.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                image={item.image}
                                categorie={item.category}
                                description={item.description}
                                id={item.id}
                            />
                        )
                    })}
            </Grid>
        </SectionS>
    )
}