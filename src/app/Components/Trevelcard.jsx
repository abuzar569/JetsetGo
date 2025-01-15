// import React from 'react';
// import Tokyo from "../Utils/tokyo.jpg";
// import Dubai from "../Utils/dubai.jpg"
// import Bali from "../Utils/Bali.jpg"
// import Link from 'next/link';
// import { FaArrowRight } from "react-icons/fa6";

// const TravelCard = () => {
//   return (
//     <div className=" relative font-League h-[200vh]">
//       <div className="w-11/12  mt-20 mx-auto">
//         <div className=' w-full sticky top-0  '>
//           <div
//             className=" h-screen w-2/4"
//             style={{
//               backgroundImage: `url(${Dubai.src})`,
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//           </div>
//         </div>
//         <div className='ml-auto w-5/12 mr-12 flex items-end text-justify'>
//           <div>
//             <h1 className='text-8xl mb-8'>Dubai</h1>
//             <h3 className='text-xl mb-8'>"Dubai, the crown jewel of the UAE, is a city of unparalleled luxury, innovation, and culture.
// Marvel at the iconic Burj Khalifa, the tallest building in the world, offering breathtaking views of the city skyline.
// Explore the opulent Dubai Mall, a shopping paradise with high-end brands and unique attractions like the Dubai Aquarium.
// Stroll through the historic Al Fahidi district and discover Dubai's rich heritage and traditional architecture.
// Experience the thrill of desert safaris, dune bashing, and camel rides in the golden sands of the Arabian Desert.

// Our travel criteria are designed to ensure a hassle-free and unforgettable journey.
// We provide personalized itineraries to suit every traveler, from adventure seekers to luxury enthusiasts.
// Enjoy premium accommodations, expert-guided tours, and seamless transport services throughout your stay.
// Discover hidden gems like Dubai Miracle Garden or the serene beaches along the Arabian Gulf.
// With us, explore Dubai's vibrant culture, modern wonders, and create memories that last a lifetime."</h3>
//             <Link className='text-xl flex justify-end items-center gap-3' href="#">Read More <FaArrowRight /></Link>
//           </div>
//         </div>
//       </div>
//       <div className="w-11/12   mt-20 mx-auto">
//         <div className=' w-full sticky top-0  '>
//           <div
//             className=" h-screen w-2/4"
//             style={{
//               backgroundImage: `url(${Tokyo.src})`,
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//           </div>
//         </div>
//         <div className='ml-auto w-5/12 mr-12 flex items-end text-justify'>
//           <div>
//             <h1 className='text-8xl mb-8'>Tokyo</h1>
//             <h3 className='text-xl mb-8'>"Tokyo, Japan's bustling capital, is a city that seamlessly blends ancient traditions with modern marvels.
//               Explore the serene beauty of historic temples like Senso-ji and Meiji Shrine, where peace meets spirituality.
//               Wander through vibrant districts like Shibuya and Shinjuku, alive with neon lights and endless energy.
//               Indulge in Tokyo's world-renowned cuisine, from sushi and ramen to delightful street food in Asakusa.
//               Shop at Ginza's luxury boutiques or uncover unique treasures in Harajuku's quirky streets.

//               Our travel criteria focus on providing a seamless experience for every explorer.
//               We ensure personalized itineraries that match your interests, whether you're a history buff or a nightlife enthusiast.
//               Enjoy comfortable accommodations, guided tours, and stress-free transport options throughout your journey.
//               Our curated experiences help you uncover hidden gems while making the most of Tokyo's iconic landmarks.
//               Travel with us to discover Tokyo's charm and create unforgettable memories."</h3>
//             <Link className='text-xl flex justify-end items-center gap-3' href="#">Read More <FaArrowRight /></Link>
//           </div>
//         </div>
//       </div>
//       <div className="w-11/12   mt-20 mx-auto">
//         <div className=' w-full sticky top-0  '>
//           <div
//             className=" h-screen w-2/4"
//             style={{
//               backgroundImage: `url(${Bali.src})`,
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           >
//           </div>
//         </div>
//         <div className='ml-auto w-5/12 mr-12 flex items-end text-justify'>
//           <div>
//             <h1 className='text-8xl mb-8'>Bali</h1>
//             <h3 className='text-xl mb-8'>"Bali, the Island of the Gods, is a tropical paradise known for its lush landscapes and serene spirituality.
// Explore the iconic rice terraces of Ubud, where nature’s beauty meets traditional Balinese farming.
// Relax on pristine beaches like Seminyak and Nusa Dua, perfect for sunbathing, surfing, and unforgettable sunsets.
// Visit ancient temples such as Tanah Lot and Uluwatu, perched dramatically along the coastline.
// Immerse yourself in Bali’s vibrant culture with traditional dance performances and art markets.

// Our travel criteria ensure a seamless and enriching experience for every traveler.
// We offer personalized itineraries tailored to your preferences, from relaxation to adventure.
// Stay in charming villas, eco-resorts, or luxury accommodations surrounded by Bali’s natural beauty.
// Enjoy guided tours to hidden waterfalls, scenic hiking trails, and local culinary delights.
// With us, uncover Bali’s tranquil charm, spiritual heritage, and vibrant adventures for an unforgettable journey."</h3>
//             <Link className='text-xl flex justify-end items-center gap-3' href="#">Read More <FaArrowRight /></Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelCard;


import React, { useEffect, useRef } from 'react';
import Tokyo from "../Utils/tokyo.jpg";
import Dubai from "../Utils/dubai.jpg"
import Bali from "../Utils/Bali.jpg"
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TravelCard = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  const dubaiRef = useRef(null);
  const tokyoRef = useRef(null);
  const baliRef = useRef(null);
  
  useEffect(() => {
    // Function to create stagger animation for text
    const createTextAnimation = (element) => {
      const title = element.querySelector('h1');
      const description = element.querySelector('h3');
      const link = element.querySelector('a');
      
      // Split text into lines for the description
      const lines = description.innerHTML.split('.');
      description.innerHTML = lines
        .map(line => `<div class="line-wrap"><div class="line">${line}.</div></div>`)
        .join('');

      return gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "center center",
          scrub: false,
        }
      })
      .fromTo(title, {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        opacity: 0,
        scale: 1.2,
      }, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out"
      })
      .fromTo(description.querySelectorAll('.line'), {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=1")
      .fromTo(link, {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.5");
    };

    // Function to create image animation
    const createImageAnimation = (element) => {
      const image = element.querySelector('.image-container');
      
      return gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      })
      .fromTo(image, {
        scale: 1.2,
        filter: "brightness(0.5) ",
      }, {
        scale: 1,
        filter: "brightness(1) blur(0px)",
        duration: 2,
      });
    };

    // Parallax effect for images
    [dubaiRef, tokyoRef, baliRef].forEach(ref => {
      const image = ref.current.querySelector('.image-container');
      gsap.to(image, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Apply animations to each section
    [dubaiRef, tokyoRef, baliRef].forEach(ref => {
      const contentContainer = ref.current.querySelector('.content-container');
      
      // Initial state
      gsap.set(contentContainer, { visibility: "visible" });
      
      // Create animations
      createImageAnimation(ref.current);
      createTextAnimation(contentContainer);
    });

    // Hover animation for links
    document.querySelectorAll('.read-more-link').forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link.querySelector('.arrow'), {
          x: 10,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link.querySelector('.arrow'), {
          x: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      });
    });
  }, []);

  return (
    <div className=" font-League mb-20 text-white bg-black">
      <div ref={dubaiRef} className="w-11/12 mt-20 mx-auto overflow-hidden">
        <div className='w-full sticky top-0'>
          <div
            className="image-container h-screen w-full sm:w-2/4 transform-gpu"
            style={{
              backgroundImage: `url(${Dubai.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
          </div>
        </div>
        <div className='content-container ml-auto w-full md:w-5/12 mr-36 flex items-end text-justify' style={{ visibility: "hidden" }}>
          <div>
            <h1 className='text-8xl mb-8'>Dubai</h1>
            <h3 className='text-xl mb-8'>"Dubai, the crown jewel of the UAE, is a city of unparalleled luxury, innovation, and culture.
Marvel at the iconic Burj Khalifa, the tallest building in the world, offering breathtaking views of the city skyline.
Explore the opulent Dubai Mall, a shopping paradise with high-end brands and unique attractions like the Dubai Aquarium.
Stroll through the historic Al Fahidi district and discover Dubai's rich heritage and traditional architecture.
Experience the thrill of desert safaris, dune bashing, and camel rides in the golden sands of the Arabian Desert."</h3>
            <Link className='text-xl flex justify-end items-center gap-3 read-more-link' href="#">
              Read More <span className="arrow"><FaArrowRight /></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Tokyo and Bali sections follow the same pattern - repeated for each section */}
      <div ref={tokyoRef} className="w-11/12 mt-20  text-white bg-black mx-auto overflow-hidden">
        {/* Tokyo section content - same structure as Dubai */}
        <div className='w-full sticky top-0'>
          <div
            className="image-container h-screen w-full sm:w-2/4 transform-gpu"
            style={{
              backgroundImage: `url(${Tokyo.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
          </div>
        </div>
        <div className='content-container ml-auto w-full md:w-5/12 mr-36 flex items-end text-justify' style={{ visibility: "hidden" }}>
          <div>
            <h1 className='text-8xl mb-8'>Tokyo</h1>
            <h3 className='text-xl mb-8'>"Tokyo, Japan's bustling capital, is a city that seamlessly blends ancient traditions with modern marvels.
Explore the serene beauty of historic temples like Senso-ji and Meiji Shrine, where peace meets spirituality.
Wander through vibrant districts like Shibuya and Shinjuku, alive with neon lights and endless energy.
Indulge in Tokyo's world-renowned cuisine, from sushi and ramen to delightful street food in Asakusa.
Shop at Ginza's luxury boutiques or uncover unique treasures in Harajuku's quirky streets."</h3>
            <Link className='text-xl flex justify-end items-center gap-3 read-more-link' href="#">
              Read More <span className="arrow"><FaArrowRight /></span>
            </Link>
          </div>
        </div>
      </div>

      <div ref={baliRef} className="w-11/12 mt-20  text-white bg-black mx-auto overflow-hidden">
        {/* Bali section content - same structure as Dubai */}
        <div className='w-full sticky top-0'>
          <div
            className="image-container h-screen w-full sm:w-2/4 transform-gpu "
            style={{
              backgroundImage: `url(${Bali.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
          </div>
        </div>
        <div className='content-container ml-auto w-full md:w-5/12 mr-36 flex items-end text-justify' style={{ visibility: "hidden" }}>
          <div>
            <h1 className='text-8xl mb-8'>Bali</h1>
            <h3 className='text-xl mb-8'>"Bali, the Island of the Gods, is a tropical paradise known for its lush landscapes and serene spirituality.
Explore the iconic rice terraces of Ubud, where nature's beauty meets traditional Balinese farming.
Relax on pristine beaches like Seminyak and Nusa Dua, perfect for sunbathing, surfing, and unforgettable sunsets.
Visit ancient temples such as Tanah Lot and Uluwatu, perched dramatically along the coastline.
Immerse yourself in Bali's vibrant culture with traditional dance performances and art markets."</h3>
            <Link className='text-xl flex justify-end items-center gap-3 read-more-link' href="#">
              Read More <span className="arrow"><FaArrowRight /></span>
            </Link>
          </div>
        </div>
      </div>
      <div className=' mt-10 w-40 text-white mx-auto text-2xl text-center'>
        <h1 className=' border-2 p-2'>Show more</h1>
      </div>
    </div>
  );
};

export default TravelCard;