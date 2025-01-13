'use client';

import { useRef } from 'react';
import Header from './Components/Header';
import AnimatedHero from './Components/Hero';
import Showcase from './Components/Showcase';
import Trevelcard from './Components/Trevelcard';

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <div>
      <Header />
      <AnimatedHero />
      {/* <Showcase /> */}
      {/* <Trevelcard /> */}
    </div>
  );
}
