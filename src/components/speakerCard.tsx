"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Anton } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: ['400'] });

interface CardProps {
  image: string;
  title: string;
  description: string;
  details: string;
}

export function Card({ image, title, description, details }: CardProps) {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className="relative">
      {/* Card: Initially shows only the image */}
      <div
        className={`${anton.className} max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
          isInfoVisible ? 'blur-sm' : ''
        }`}
        onClick={toggleInfo}
      >
        {/* Image Section with Next.js Image */}
        <div className="relative w-full h-64">
          <Image
            className="rounded-t-lg"
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>

        {/* Card Content */}
        <div className="p-5 text-center">
          <h5 className={`${anton.className} text-xl tracking-tight text-gray-900 dark:text-white`}>
            {title}
          </h5>
          <p className="text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </div>

      {/* Info Modal: Appears when the card is clicked */}
      {isInfoVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={toggleInfo}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing the modal
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
            <p className="mb-4 text-gray-700">{details}</p>
            <button
              onClick={toggleInfo}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
