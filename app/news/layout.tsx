"use client"
import { ReactNode } from "react";
import Footer from "../components/Footer";

import Recent from "../components/Recent";
import { Container } from "../global";
interface NewsLayoutProps {
    children: ReactNode;
}

export default function NewsLayout({ children }: NewsLayoutProps) {
    return (
        <>
            <>
                {children}

                <Container>
                    <Recent />
                </Container>
                <Footer />
            </>
        </>
    ) 
}