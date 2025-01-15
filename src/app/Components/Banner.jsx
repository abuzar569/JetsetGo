import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const contentRefs = useRef([]);

  const banners = [
    {
      image: 'Maldives.jpg',
      title: 'Maldives',
      tagline: 'Paradise Awaits',
      description: 'Experience paradise on Earth with crystal clear waters, pristine white sand beaches, and luxury overwater villas.',
      accentColor: 'rgb(0, 163, 255)'
    },
    {
      image: 'Thailand.jpg',
      title: 'Thailand',
      tagline: 'Land of Wonders',
      description: 'Discover ancient temples, vibrant street life, and breathtaking beaches in the Land of Smiles.',
      accentColor: 'rgb(255, 107, 107)'
    },
    {
      image: 'Banner4.jpg',
      title: 'Singapore',
      tagline: 'Where Future Meets Tradition',
      description: 'Immerse yourself in a perfect blend of modern marvels and cultural heritage in this dynamic city-state.',
      accentColor: 'rgb(255, 187, 0)'
    },
    {
      image: 'Banner3.jpg',
      title: 'Bali',
      tagline: 'Island of the Gods',
      description: 'Find your inner peace among lush rice terraces, ancient temples, and pristine beaches in this spiritual paradise.',
      accentColor: 'rgb(76, 175, 80)'
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const slides = slidesRef.current;
    const contents = contentRefs.current;

    gsap.set(slides, { xPercent: 100 });
    gsap.set(contents, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=300%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    slides.forEach((slide, index) => {
      const content = contents[index];
      
      tl.to(slide, {
        xPercent: 0,
        ease: 'none',
        duration: 1
      }, index)
      .to(content, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
      }, `>-0.5`)
      .to(slide, {
        scale: 1.1,
        duration: 1
      }, `>-0.5`);

      if (index < slides.length - 1) {
        tl.to(slide, {
          xPercent: -100,
          ease: 'none',
          duration: 1
        }, `>`)
        .to(content, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          stagger: 0.1,
        }, `<`);
      }
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  const handleSlideChange = (index) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: containerRef.current.offsetTop + (index * window.innerHeight), autoKill: false },
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <div ref={containerRef} className="relative font-League w-full overflow-hidden" style={{ height: `${banners.length * 30}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            ref={el => slidesRef.current[index] = el}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-8 lg:px-16">
              <div className="max-w-4xl" ref={el => contentRefs.current[index] = el}>
                {/* Tagline */}
                <div 
                  className="inline-block mb-6 px-4 py-2 rounded-full backdrop-blur-sm"
                  style={{ backgroundColor: `${banner.accentColor}33` }}
                >
                  <span className="text-white text-sm tracking-wider">
                    {banner.tagline}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-6xl lg:text-8xl font- text-white mb-6">
                  {banner.title}
                </h1>

                {/* Description */}
                <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl">
                  {banner.description}
                </p>

                {/* CTA Button */}
                <button 
                  className="group relative px-8 py-3 bg-white rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90"
                  aria-label={`Explore ${banner.title}`}
                >
                  <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                    Explore Now
                  </span>
                  <div 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                    style={{ backgroundColor: banner.accentColor }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      <style jsx>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Banner;