'use client';
import Image from "next/image";
import { useRef } from 'react';
import Header from './Components/Header';
import AnimatedHero from './Components/Hero';
import Trevelcard from './Components/Trevelcard';
import Domtrip from "./Components/Domtrip";
import Banner from "./Components/Banner"

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <div>
      <Header />
      <AnimatedHero />
      <Trevelcard />
      <Domtrip />
      <Banner />
    </div>
  );
}
