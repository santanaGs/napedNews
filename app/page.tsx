"use client";


import Emphasis from "./components/Emphasis";
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
    </>
  )
}
