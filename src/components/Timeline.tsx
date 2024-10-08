"use client";
import React from "react";
import { Anton } from "next/font/google";
import { Timeline } from "@/components/ui/timeline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faRocket, faTrophy, faChartBar } from '@fortawesome/free-solid-svg-icons';

// Import Anton font
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export function TimelineDemo() {
  const data = [
    {
      title: "Registration Opens",
      content: (
        <div className="lg:p-16 p-8 rounded-lg shadow-lg bg-mainBlue mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="flex justify-between items-center mb-2">
            <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-bold">
              <span className="font-extrabold text-lYellow">3rd October:</span> Registration opens for the event.
            </p>
            <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6 text-neutral-800 dark:text-neutral-200 ml-2" />
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
            Get ready to secure your spot!
          </p>
        </div>
      ),
    },
    {
      title: "Registration Closes",
      content: (
        <div className="lg:p-16 p-8 rounded-lg shadow-lg bg-mainBlue mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="flex justify-between items-center mb-2">
            <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-bold">
              <span className="font-extrabold text-lYellow">13th October:</span> Last date for registration.
            </p>
            <FontAwesomeIcon icon={faClock} className="h-6 w-6 text-neutral-800 dark:text-neutral-200 ml-2" />
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
            Don&apos;t miss out on this opportunity!
          </p>
        </div>
      ),
    },
    {
      title: "EIE Startup Santhe",
      content: (
        <div className="lg:p-16 p-8 rounded-lg shadow-lg bg-mainBlue mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="flex justify-between items-center mb-2">
            <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-bold">
              <span className="font-extrabold text-lYellow">18th October:</span> EIE Startup Santhe event takes place.
            </p>
            <FontAwesomeIcon icon={faRocket} className="h-6 w-6 text-neutral-800 dark:text-neutral-200 ml-2" />
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
            Join us for an inspiring day filled with innovation!
          </p>
        </div>
      ),
    },
    {
      title: "Esummit Events",
      content: (
        <div className="lg:p-16 p-8 rounded-lg shadow-lg bg-mainBlue mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="flex justify-between items-center mb-2">
            <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-bold">
              <span className="font-extrabold text-lYellow">19th October:</span> Inauguration, Best Manager competition, Sync It Up, and Jeopardy.
            </p>
            <FontAwesomeIcon icon={faTrophy} className="h-6 w-6 text-neutral-800 dark:text-neutral-200 ml-2" />
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
            Exciting competitions and events await!
          </p>
        </div>
      ),
    },
    {
      title: "Closing Events",
      content: (
        <div className="lg:p-16 p-8 rounded-lg shadow-lg bg-mainBlue mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="flex justify-between items-center mb-2">
            <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-bold">
              <span className="font-extrabold text-lYellow">20th October:</span> Jeopardy Day 2, Aarambh, Closing Ceremony, and Prize Distribution.
            </p>
            <FontAwesomeIcon icon={faChartBar} className="h-6 w-6 text-neutral-800 dark:text-neutral-200 ml-2" />
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
            Celebrate the end of an amazing journey with us!
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full relative overflow-hidden bg-coolGray p-10">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4C9BFF", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#7ED957", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient1)"
            d="M0,96L1440,0L1440,320L0,320Z"
            opacity="0.2"
          ></path>
        </svg>
      </div>

      {/* Timeline Header */}
      <div className="mb-10 text-center relative z-10">
        <h1
          className={`${anton.className} text-6xl md:text-11xl font-extrabold text-anton text-lYellow z-10 max-w-5xl tracking-tight leading-tight`}
        >
          <span className="block">Timeline</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mt-2">
          Join us for a series of incredible events!
        </p>
      </div>

      {/* Timeline Content */}
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
