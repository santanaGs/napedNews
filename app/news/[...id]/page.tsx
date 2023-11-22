// pages/news/[...id].tsx
"use client";

import Header from '@/app/components/Header';
import {FC} from 'react';

interface pageProps{
    params: {id: number}
}

const news: React.FC<pageProps> = ({params}) =>{
    return(
        <div>
            <Header/>
            {params.id}
        </div>
    )
}

export default news;