"use client";
import React, { useEffect, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import dynamic from "next/dynamic";
import { Anton } from 'next/font/google';
import Image from 'next/image'; // Import Image for background
import watermarkImage from '@/public/esummit24.png'; // Adjust the path accordingly
import esummitLogo from '@/public/esummit24.png'; // Adjust the path for your logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Correct import

const anton = Anton({ subsets: ['latin'], weight: ['400'] });

export function ShootingStarsAndStarsBackgroundDemo() {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    // Delay to simulate a loading effect for the animations
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 500); // Adjust the delay as necessary
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-screen rounded-md bg-coolGray flex flex-col items-center justify-center relative">
      <Image 
        src={watermarkImage} 
        alt="Watermark" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 opacity-35 z-0" 
      />

      {/* ESUMMIT Logo in the Top Right Corner */}
      <div className="absolute top-4 right-4 text-lYellow z-20">
        <Image 
          src={esummitLogo} 
          alt="ESUMMIT Logo" 
          width={100} // Adjust width as necessary
          height={50} // Adjust height as necessary
          className="object-contain" 
        />
      </div>

      <h2 className={`${anton.className} absolute text-8xl md:text-9xl lg:text-15xl font-extrabold text-anton text-lYellow z-10 max-w-5xl tracking-tight leading-tight text-left flex flex-col md:flex-row items-start gap-2 md:gap-8 transition-opacity duration-700 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h2>ESUMMIT</h2>
        <h3 className="md:text-6xl lg:text-10xl font-bold text-mainBlue">
        &apos;24
        </h3>
      </h2>

      <ShootingStars className={`transition-opacity duration-700 ${showElements ? 'opacity-100' : 'opacity-0'}`} />
      <StarsBackground className={`transition-opacity duration-700 ${showElements ? 'opacity-100' : 'opacity-0'}`} />

      {/* Social Media Icons */}
      <div className="absolute bottom-10 right-10 flex space-x-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-lYellow hover:text-lYellow transition duration-300">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lYellow hover:text-lYellow transition duration-300">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-10 animate-bounce">
        <FontAwesomeIcon icon={faChevronDown} size="2x" className="text-lYellow" />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ShootingStarsAndStarsBackgroundDemo), { ssr: false });
