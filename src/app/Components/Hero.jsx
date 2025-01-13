'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroContent = [
  {
    video: './trevel3.mp4', 
    title: 'Discover the Extraordinary',
    description: 'Embark on a journey of wonder and excitement',
    buttonText: 'Start Exploring'
  },
  {
    video: './trevel2.mp4', // Replace with your video link
    title: 'Embrace the Adventure',
    description: 'Push your limits and create unforgettable memories',
    buttonText: 'Plan Your Trip'
  },
  {
    video: './trevel1.mp4', // Replace with your video link
    title: 'Connect with Nature',
    description: 'Find peace and inspiration in the great outdoors',
    buttonText: 'Discover More'
  }
]

export default function AnimatedHero() {
  const heroRef = useRef(null)
  const videosRef = useRef([])
  const contentRefs = useRef([])

  useEffect(() => {
    const hero = heroRef.current
    const videos = videosRef.current
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

    tl.to(videos[0], {
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

    tl.fromTo(videos[1], 
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' },
      0.8
    )
    tl.fromTo(contents[1],
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: 'power2.inOut' },
      '<'
    )
    tl.to(videos[1], {
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

    tl.fromTo(videos[2],
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
            ref={(el) => (videosRef.current[index] = el)}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 3 - index }}
          >
            <video
              src={content.video}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 z-10"></div>
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
              className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-1000 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-lg"
            >
              {content.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
