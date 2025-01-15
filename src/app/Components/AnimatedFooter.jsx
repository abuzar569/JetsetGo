'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, Calendar, Globe, Award, Shield, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const AnimatedFooter = () => {
  const footerRef = useRef(null)
  const titleRef = useRef(null)
  const linksRef = useRef(null)
  const socialRef = useRef(null)
  const copyrightRef = useRef(null)
  const contactRef = useRef(null)
  const overlayRef = useRef(null)
  const lineRef = useRef(null)
  const featuresRef = useRef(null)
  const newsletterRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    const title = titleRef.current
    const links = linksRef.current
    const social = socialRef.current
    const copyright = copyrightRef.current
    const contact = contactRef.current
    const overlay = overlayRef.current
    const line = lineRef.current
    const features = featuresRef.current
    const newsletter = newsletterRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    })

    gsap.to(footer, {
      backgroundPositionY: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: footer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      }
    })

    gsap.fromTo(overlay,
      { opacity: 0 },
      {
        opacity: 0.85,
        duration: 1.5,
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    gsap.fromTo(line,
      { width: '0%' },
      {
        width: '100%',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    tl.fromTo(title,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(features.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
      '-=0.4'
    )
    .fromTo(links.children,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
      '-=0.4'
    )
    .fromTo(contact.children,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
      '-=0.8'
    )
    .fromTo(newsletter,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.6'
    )
    .fromTo(social.children,
      { y: 20, scale: 0, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.4'
    )
    .fromTo(copyright,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.2'
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative bg-cover bg-center bg-fixed font-League bg-no-repeat py-10 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/Footer.jpg')",
      }}
    >
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jet Set-GO
            </h2>
            <p className="text-xl text-gray-300">Where Dreams Take Flight</p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              { icon: Globe, title: "Global Coverage", desc: "Destinations across 100+ countries" },
              { icon: Shield, title: "Secure Booking", desc: "Protected payments & guarantees" },
              { icon: Award, title: "Best Price", desc: "Price match guarantee on all bookings" },
              { icon: Heart, title: "24/7 Support", desc: "Round-the-clock customer care" }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <Icon className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>

          <div ref={lineRef} className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div ref={linksRef} className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 relative">
                Explore
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  'Destinations',
                  'Holiday Packages',
                  'Luxury Retreats',
                  'Adventure Tours',
                  'Cruise Deals',
                  'Flight Booking',
                  'Travel Insurance'
                ].map((link) => (
                  <li key={link} className="transform hover:-translate-x-2 transition-transform duration-300">
                    <Link href={`/${link.toLowerCase().replace(' ', '-')}`} 
                          className="hover:text-blue-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div ref={contactRef} className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 relative">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <MapPin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-blue-400 transition-colors">123 Travel Street, Adventure City</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-blue-400 transition-colors">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-blue-400 transition-colors">info@jetsetgo.com</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Clock className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-blue-400 transition-colors">24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Calendar className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-blue-400 transition-colors">Mon - Sun: Always Open</span>
                </div>
              </div>
            </div>

            <div className="space-y-6" ref={newsletterRef}>
              <h3 className="text-xl font-semibold mb-6 relative">
                Newsletter
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></span>
              </h3>
              <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for exclusive deals and travel tips.</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm transition-all"
                />
                <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 relative">
                Follow Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></span>
              </h3>
              <div ref={socialRef} className="flex space-x-6">
                {[
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Twitter, label: 'Twitter' }
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="group relative transform hover:scale-110 transition-transform duration-300"
                    aria-label={label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <Icon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div ref={copyrightRef} className="text-center">
            <div ref={lineRef} className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Jet Set-GO. All rights reserved. 
              <span className="mx-2">|</span>
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AnimatedFooter