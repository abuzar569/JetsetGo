'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroContent = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Discover the Extraordinary',
    description: 'Embark on a journey of wonder and excitement',
    buttonText: 'Start Exploring'
  },
  {
    image: 'https://images.unsplash.com/photo-1463595709917-93fb36118407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Embrace the Adventure',
    description: 'Push your limits and create unforgettable memories',
    buttonText: 'Plan Your Trip'
  },
  {
    image: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Connect with Nature',
    description: 'Find peace and inspiration in the great outdoors',
    buttonText: 'Discover More'
  }
]

export default function AnimatedHero() {
  const heroRef = useRef(null)
  const imagesRef = useRef([])
  const contentRefs = useRef([])

  useEffect(() => {
    const hero = heroRef.current
    const images = imagesRef.current
    const contents = contentRefs.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '300% top',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })


    tl.to(images[0], {
      yPercent: -105,
      scale: 1.1,
      duration: 1,
      ease: 'power2.inOut',
    })
    tl.to(contents[0], {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    }, '<')


    tl.fromTo(images[1], 
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' },
      0.8
    )
    tl.fromTo(contents[1],
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: 'power2.inOut' },
      '<'
    )
    tl.to(images[1], {
      yPercent: -100,
      duration: 1,
      ease: 'power2.inOut',
    }, 1.8)
    tl.to(contents[1], {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    }, '<')


    tl.fromTo(images[2],
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: 'power3.out' },
      2.3
    )
    tl.fromTo(contents[2],
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
      '<'
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={heroRef} className="relative h-screen font-League overflow-hidden bg-black">
      {heroContent.map((content, index) => (
        <div key={index} className="absolute inset-0">
          <div
            ref={(el) => (imagesRef.current[index] = el)}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 3 - index }}
          >
            <img
              src={content.image}
              alt={`Hero image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
              {content.title}
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
              {content.description}
            </p>
            <button
  class="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-1000 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-lg"
>
              {content.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

