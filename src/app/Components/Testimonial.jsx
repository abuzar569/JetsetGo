'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    location: 'New York, USA',
    text: 'Jet Set-GO made our family vacation unforgettable! The attention to detail and personalized itinerary exceeded our expectations.',
    image: './Testimonial1.jpg',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    name: 'Akira Tanaka',
    location: 'Tokyo, Japan',
    text: "As a solo traveler, I felt safe and inspired throughout my journey. Jet Set-GO's local guides were knowledgeable and friendly.",
    image: './Testimonial1.jpg',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Barcelona, Spain',
    text: 'Our honeymoon was pure magic thanks to Jet Set-GO. Every destination was picture-perfect, and the experiences were truly unique.',
    image: './Testimonial1.jpg',
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 4,
    name: 'Marcus Chen',
    location: 'Singapore',
    text: 'The cultural immersion experiences were outstanding. Every detail was thoughtfully planned and executed perfectly.',
    image: './Testimonial1.jpg',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 5,
    name: 'Isabella Costa',
    location: 'Rio de Janeiro, Brazil',
    text: 'From hidden local gems to luxurious resorts, Jet Set-GO crafted the perfect blend of adventure and relaxation.',
    image: './Testimonial1.jpg',
    color: 'from-amber-500 to-orange-600'
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef(null)
  const slideRefs = useRef([])
  const textRefs = useRef([])
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 6000)

    return () => {
      resetTimeout()
    }
  }, [currentIndex])

  const animateText = (textElement) => {
    const nameLoc = textElement.querySelector('.name-location')
    const quote = textElement.querySelector('.quote-text')
    
    gsap.fromTo(nameLoc.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    )
    
    gsap.fromTo(quote,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power2.out' }
    )
  }

  const animateSlide = (direction) => {
    if (isAnimating) return

    setIsAnimating(true)
    const currentSlide = slideRefs.current[currentIndex]
    const nextIndex = direction === 'next' 
      ? (currentIndex + 1) % testimonials.length
      : (currentIndex - 1 + testimonials.length) % testimonials.length
    const nextSlide = slideRefs.current[nextIndex]

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false)
        setCurrentIndex(nextIndex)
        animateText(textRefs.current[nextIndex])
      }
    })

    if (direction === 'next') {
      tl.fromTo(currentSlide, 
        { x: 0, opacity: 1, scale: 1, rotateY: 0 },
        { x: '-100%', opacity: 0, scale: 0.8, rotateY: -30, duration: 0.8, ease: 'power2.inOut' }
      )
      .fromTo(nextSlide,
        { x: '100%', opacity: 0, scale: 0.8, rotateY: 30 },
        { x: 0, opacity: 1, scale: 1, rotateY: 0, duration: 0.8, ease: 'power2.inOut' },
        '-=0.8'
      )
    } else {
      tl.fromTo(currentSlide,
        { x: 0, opacity: 1, scale: 1, rotateY: 0 },
        { x: '100%', opacity: 0, scale: 0.8, rotateY: 30, duration: 0.8, ease: 'power2.inOut' }
      )
      .fromTo(nextSlide,
        { x: '-100%', opacity: 0, scale: 0.8, rotateY: -30 },
        { x: 0, opacity: 1, scale: 1, rotateY: 0, duration: 0.8, ease: 'power2.inOut' },
        '-=0.8'
      )
    }
  }

  const nextSlide = () => animateSlide('next')
  const prevSlide = () => animateSlide('prev')

  useEffect(() => {
    // Initial text animation
    animateText(textRefs.current[currentIndex])
  }, [])

  return (
    <section className="py-16 min-h-screen flex items-center font-League overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">
          Traveler Tales
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-sm"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-sm"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel Container */}
          <div ref={carouselRef} className="relative h-[400px] md:h-[300px] perspective-1000">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={el => slideRefs.current[index] = el}
                className={`absolute inset-0 transition-all duration-300 ${
                  index !== currentIndex ? 'pointer-events-none' : ''
                }`}
                style={{ visibility: Math.abs(currentIndex - index) <= 1 ? 'visible' : 'hidden' }}
              >
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden h-full transform-gpu shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-30`} />
                  <div 
                    ref={el => textRefs.current[index] = el}
                    className="p-6 md:p-8 relative h-full flex flex-col justify-between"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 name-location">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white/20">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-white/40" />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="font-semibold text-2xl text-white mb-2">{testimonial.name}</h3>
                        <p className="text-gray-300 text-lg">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="quote-text text-gray-200 italic text-xl md:text-2xl leading-relaxed mt-6 text-center md:text-left">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index > currentIndex) {
                    animateSlide('next')
                  } else if (index < currentIndex) {
                    animateSlide('prev')
                  }
                }}
                className={`transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-white' 
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                } rounded-full`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}