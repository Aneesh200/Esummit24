"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa"; // Import icons
import { Anton } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: ['400'] });

export function Footer() {
  return (
    <footer className="bg-mainBlue text-lYellow py-6">
      {/* Top Line */}
      <div className="border-t-2 border-lYellow mb-4"></div>

      <div className="container px-4 mx-auto grid text-centre grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Left Section: ESUMMIT and Icons */}
        <div className="flex flex-col items-start">
          <h1 className={`${anton.className} text-4xl mb-2`}>ESUMMIT</h1>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-lYellow" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-lYellow" />
            </a>
          </div>
        </div>

        {/* Center Section: Contact Details */}
        <div className="flex flex-col items-start">
        <h2 className={`${anton.className} text-2xl mb-2`}>Contact Us</h2>
          <div className="flex items-center mb-2">
            <span>Anirudh H A</span>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            <span>+91 98458 03307</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <span><a href="mailto:ecell@pes.edu">ecell@pes.edu</a></span>
          </div>
        </div>

        {/* Right Section: Visit Us at RR Campus */}
        <div className="flex flex-col items-start">
          <h2 className={`${anton.className} text-2xl mb-2`}>Visit Us at RR Campus</h2>
          <p className="text-lg">100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p> // updated the address
          <p className="text-lg">We welcome you to explore our campus and meet our team!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
