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
        
<div
  class="flex absolute top-4 right-4 w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out"
>
  <div
    class="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3"
  >
    <button
    
      title="Go to the home page"
      class="text-light-blue-light hover:text-black dark:text-white border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        ></path>
      </svg>
    </button>
    <button
      title="Go to post list page"
      class="text-light-blue-light hover:text-black dark:text-white border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
        ></path>
        <path
          d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
        ></path>
      </svg>
    </button>
    <button
      title="Go to about me page"
      class="text-light-blue-light hover:text-black dark:text-white border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
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
  <div className="bg-primary text-primary-foreground font-normal text-3xl p-2 rounded transition-transform hover:scale-110">
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
