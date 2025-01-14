'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import styles from './Loding.module.css'

export default function Loading() {
  const [counter, setCounter] = useState(0)
  const loadingRef = useRef(null)
  const counterRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const body = document.body
    body.style.overflow = 'hidden'

    gsap.to(counterRef.current, {
      duration: 2,
      innerText: 100,
      snap: { innerText: 1 },
      onUpdate: () => setCounter(Math.round(counterRef.current.innerText))
    })

    gsap.to(barRef.current, {
      duration: 2,
      width: '100%',
      ease: 'power1.inOut'
    })

    const tl = gsap.timeline({ delay: 2.5 })

    tl.to(loadingRef.current, {
      duration: 0.5,
      opacity: 0,
      pointerEvents: 'none'
    })

    tl.call(() => {
      body.style.overflow = ''
    })

    return () => {
      body.style.overflow = ''
    }
  }, [])

  return (
    <div ref={loadingRef} className={styles.loadingContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Your Travel Adventure</h1>
        <div className={styles.loadingBarContainer}>
          <div ref={barRef} className={styles.loadingBar}></div>
        </div>
        <div className={styles.counter}>
          <span ref={counterRef}>0</span>%
        </div>
      </div>
      <div className={styles.bgImage}></div>
    </div>
  )
}

