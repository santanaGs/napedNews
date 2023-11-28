"use client";


import Emphasis from "./components/Emphasis";
import Footer from "./components/Footer";
// Sections
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Recent from "./components/Recent";
import Scroll from "./components/Scroll";
import { Container } from "./global";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Emphasis />
        <Scroll/>
        <Recent/>
      </Container>
      <Footer/>
    </>
  )
}
