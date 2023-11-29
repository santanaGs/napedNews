// pages/news/[...id].tsx
"use client";

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Recent from '@/app/components/Recent';
import { Container } from '@/app/global';
import { FC } from 'react';
import Title from './components/atoms/Title';
import Description from './components/atoms/Description';
import Date from './components/atoms/Date';
import HeaderS from './components/molecules/Header';
import BodyS from './components/molecules/Body';

interface pageProps {
    params: { id: number }
}

const news: React.FC<pageProps> = ({ params }) => {
    return (
        <div>
            <Header />
            <Container>
                <HeaderS
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis neque sed odio.'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='00 de Julho de 2021'
                />
                <BodyS
                    path='https://imgur.com/JC34g4m.png'
                    descriptionOne='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.'
                    descriptionTwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.'
                    pathTwo='https://imgur.com/hAHsKRJ.png'
                    descriptionTree='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.'
                />
            </Container>
        </div>
    )
}

export default news;