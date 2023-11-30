'use client'

import Header from "@/app/components/Header"
import { Container } from "@/app/global"
import Banner from "./components/molecules/Banner"
import SearchBar from "./components/molecules/SearchBar"
import { Grid } from "./styles"
import Item from "@/app/components/Scroll/Item"
import Footer from "@/app/components/Footer"

interface pageProps {
    params?: { category: string } | undefined;
    image: string;
    title?: string;
    description: string;
    date?: string;
    link?: string;
    category: string;
    id: number;
}


const posts: pageProps[] = [
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
        id: 523,
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
        id: 523,
    },
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
        id: 523,
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
        id: 523,
    },
]

export default function Search({ params }: pageProps) {
    return (
        <>
            <Header />
            <Container>
                <Banner
                    title={params?.category}
                    description="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
                />
                <SearchBar />
                <Grid>
                    {posts.map((item, index) => {
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
            </Container>
            <Footer/>
        </>
    )
}