'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const logoRef = useRef(null)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const overlayRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    gsap.set(logoRef.current, { x: -100, opacity: 0 })
    gsap.set(toggleRef.current, { x: 100, opacity: 0 })
    gsap.set(menuRef.current, { x: '100%' })
    gsap.set(overlayRef.current, { x: '-100%', opacity: 0 })

    gsap.to(logoRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.to(toggleRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
  }, [])

  const handleToggle = () => {
    setIsOpen(!isOpen)
    animateMenu(!isOpen)
  }

  const animateMenu = (open) => {
    gsap.to(toggleRef.current, {
      rotation: open ? 180 : 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })

    gsap.to(menuRef.current, {
      x: open ? '0%' : '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    })

    gsap.to(overlayRef.current, {
      x: open ? '0%' : '-100%',
      opacity: open ? 0.5 : 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })

    if (open) {
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.2
        }
      )
    }
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-none  text-white  font-League z-50">
        <div ref={logoRef} className="absolute top-4 left-4 pointer-events-auto">
          <Logo />
        </div>
        <button
          ref={toggleRef}
          onClick={handleToggle}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-4 pointer-events-auto bg-black z-50 transition-colors hover:bg-primary/90"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-screen sm:w-1/2 h-full bg-gradient-to-br from-primary to-primary-dark text-primary-foreground p-8 overflow-y-auto shadow-2xl bg-black  z-30"
      >
        {/* <button
          onClick={handleToggle}
          className="absolute top-4 right-4 bg-primary-light text-primary-foreground rounded-full p-2 transition-colors hover:bg-primary-light/90"
          aria-label="Close menu"
        >
          <XIcon size={24} />
        </button> */}
        <nav className="mt-28 font-League">
          <ul className="space-y-6 text-white">
            {['Home', 'About', 'Services', 'Contact', 'Blog'].map((item, index) => (
              <MenuLink key={item} href={`/${item.toLowerCase()}`} index={index} ref={(el) => (linksRef.current[index] = el)}>
                {item}
              </MenuLink>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

const Logo = () => (
  <div className="bg-primary text-primary-foreground font-bold text-3xl p-2 rounded transition-transform hover:scale-110">
    Jetset-Go
  </div>
)

const MenuLink = React.forwardRef(({ href, children }, ref) => (
  <li ref={ref} className="overflow-hidden">
    <Link
      href={href}
      className="text-2xl hover:underline relative block transition-transform hover:translate-x-2"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-primary-light transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
    </Link>
  </li>
))

MenuLink.displayName = 'MenuLink'

export default Header
