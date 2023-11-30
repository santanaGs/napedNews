"use client"

import Image from "next/image";
import { Container, Content, Description, ImageS, LeftDiv, LinkS, RightDiv, SubTitle, Title } from "./styles";

import nave from '@/public/svgs/404.svg'

export default function Error404(){
    return(
        <Container>
            <Content>
                <LeftDiv>
                    <Title>Tenho más notícias para você!</Title>
                    <SubTitle>A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</SubTitle>
                    <LinkS href={'/'}>Voltar a home</LinkS>
                </LeftDiv>
                <RightDiv>
                    <ImageS alt="" src={nave} width={400} height={205}/>
                    <Description>Ups! Você chegou no espaço... volte para o mundo nerd!</Description>
                </RightDiv>
            </Content>
        </Container>
    )
}