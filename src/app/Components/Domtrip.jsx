

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Domtrip = () => {
  const headerRef = useRef(null)
  const subHeaderRef = useRef(null)
  const cardRefs = useRef([])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const tours = [
    {
      images: ['/kashmir.jpg', '/kashmir2.jpg', '/kashmir3.jpg'],
      title: 'Jammu & Kashmir',
      description: 'Explore the "Paradise on Earth" with serene lakes, lush meadows, and breathtaking landscapes. This tour takes you from Srinagar to Naranag, covering hidden gems like Shitkadi and Gangabal.',
      mt: 'lg:mt-20'
    },
    {
      images: ['/Rajasthan.jpg', '/Rajasthan2.jpg', '/Rajasthan3.jpg'],
      title: 'Rajasthan',
      description: 'Experience the "Land of Kings," with majestic forts, sprawling deserts, and vibrant culture. Travel through Jaipur, Udaipur, and Jodhpur to soak in Rajasthan\'s royal charm.',
      mt: ''
    },
    {
      images: ['/Ladakh.jpg', '/Ladakh2.jpg', '/Ladakh3.jpg'],
      title: 'Ladakh',
      description: 'Dive into the unique blend of rugged mountains and tranquil monasteries. This tour is perfect for adventurers and seekers of inner peace alike.',
      mt: 'lg:mt-20'
    },
    {
      images: ['/Spiti.jpg', '/Spiti2.jpg', '/Spiti3.jpg'],
      title: 'Spiti',
      description: 'A dream for every adventurer, Spiti offers surreal views and spiritual solace. From Vishnusar to Gadsar Pass, every stop tells a story.',
      mt: 'lg:mt-20'
    },
    {
      images: ['/Goa.jpg', '/Goa2.jpg', '/Goa3.jpg'],
      title: 'Goa',
      description: 'The ultimate beach destination, Goa is perfect for parties, relaxation, and water sports. Explore vibrant nightlife, Portuguese architecture, and serene beaches.',
      mt: ''
    },
    {
      images: ['/Sikkim.jpg', '/Sikkim2.jpg', '/Sikkim3.jpg'],
      title: 'Sikkim',
      description: 'Nestled in the Himalayas, Sikkim offers stunning mountain vistas, serene monasteries, and adventure-filled trekking trails. Visit Gangtok, Tsomgo Lake, and Pelling for an unforgettable experience.',
      mt: 'lg:mt-20'
    }
  ]

  useEffect(() => {
    // Animate header
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate sub-header
    gsap.from(subHeaderRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: subHeaderRef.current,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate cards
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=50',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, [])

  useEffect(() => {
    if (hoveredIndex !== null) {
      const card = cardRefs.current[hoveredIndex]
      const images = card.querySelectorAll('img')
      let currentIndex = 0

      const shuffleImages = () => {
        gsap.to(images[currentIndex], { opacity: 0, duration: 0.5 })
        currentIndex = (currentIndex + 1) % images.length
        gsap.to(images[currentIndex], { opacity: 1, duration: 0.5 })
      }

      const interval = setInterval(shuffleImages, 1000)

      return () => clearInterval(interval)
    }
  }, [hoveredIndex])

  return (
    <div className='font-League mt-10'>
      <div>
        <h1 ref={headerRef} className='text-6xl mt-24 text-center font-Soria text-white'>TOP DOMESTIC TOUR</h1>
        <p ref={subHeaderRef} className='text-white mt-4 text-3xl text-center'>Trekking, cultural & experiential tours for Indian tourists</p>
        <div className='flex flex-wrap justify-evenly mt-10'>
          {tours.map((tour, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el} 
              className={`${tour.mt} rounded-xl border h-[520px] text-center w-96 mb-10 overflow-hidden transition-all duration-300 ease-in-out`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-48">
                {tour.images.map((img, imgIndex) => (
                  <img 
                    key={imgIndex}
                    className='absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-in-out'
                    src={img}
                    alt={`${tour.title} - Image ${imgIndex + 1}`}
                    style={{ opacity: imgIndex === 0 ? 1 : 0 }}
                  />
                ))}
              </div>
              <div className='p-4'>
                <h2 className='mt-3 text-white'>8 Days / 7 Nights</h2>
                <h1 className='p-2 text-4xl text-white'>{tour.title}</h1>
                <h3 className='m-2 text-white'>{tour.description}</h3>
                <button className='border px-6 py-2 mt-4 text-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black'>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Domtrip

