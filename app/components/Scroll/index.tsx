import Item from "./Item";
import ScrollItem from "./ScrollItem";
import { DivR, DivS, NewsTitle, ScrollView, SectionS } from "./styles";

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


// Data
const news: newsProps[] = [
    {
        image: 'https://imgur.com/fbldwso.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Anime',
        id: 12,
    },
    {
        image: 'https://imgur.com/mSeWBPu.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Filme',
        id: 362,
    },
    {
        image: 'https://imgur.com/bJFBzyE.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Jogo',
        id: 78
    },
    {
        image: 'https://imgur.com/UKuPZxQ.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Filme',
        id: 7439
    },
    {
        image: 'https://imgur.com/SPBJO83.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Série',
        id: 172
    },
    {
        image: 'https://imgur.com/fbldwso.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Anime',
        id: 16
    },
    {
        image: 'https://imgur.com/mSeWBPu.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Filme',
        id: 23
    },
    {
        image: 'https://imgur.com/bJFBzyE.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Jogo',
        id: 392
    },
    {
        image: 'https://imgur.com/UKuPZxQ.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Filme',
        id: 31
    },
    {
        image: 'https://imgur.com/SPBJO83.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
        date: '00/00/0000',
        link: '/',
        category: 'Série',
        id: 1604
    },
]

const novidades: newsProps[] = [
    {
        image: 'https://imgur.com/IKTAoev.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'anime',
        id: 122,
    },
    {
        image: 'https://imgur.com/NePHyyh.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'filme',
        id: 324,
    },
    {
        image: 'https://imgur.com/NaJFLcf.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
        date: '00/00/0000',
        link: '/',
        category: 'jogo',
        id: 523 ,
    },
]

export default function Scroll() {
    return (
        <SectionS>
            <ScrollView>
                {news.map((item, index) => {
                    return (
                        <ScrollItem
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            link={`/news/${item.category}/${item.id}`}
                            categorie={item.category}
                        />
                    )
                })}
            </ScrollView>
            <DivR>
                <NewsTitle>Novidades</NewsTitle>
                <DivS>
                    {novidades.map((item, index) => {
                        return (
                            <Item
                                image={item.image}
                                categorie={item.category}
                                description={item.description}
                                id={item.id}
                            />
                        )
                    })}

                </DivS>
            </DivR>
        </SectionS>
    )
}