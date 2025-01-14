'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroContent = [
  {
    image: './City.jpg',
    title: 'Discover the Extraordinary',
    description: 'Embark on a journey of wonder and excitement',
    buttonText: 'Start Exploring'
  },
  {
    image: './Mountain.jpg',
    title: 'Embrace the Adventure',
    description: 'Push your limits and create unforgettable memories',
    buttonText: 'Plan Your Trip'
  },
  {
    image: './Tower.jpg',
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
              alt={content.title}
              className="object-cover w-full h-full pointer-events-none"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 z-10"></div>
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
              className="px-8 py-4 bg-rose-400 rounded-md text-white relative font-semibold text-lg hover:bg-rose-500 transition-all duration-700"
            >
              {content.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
