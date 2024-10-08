"use client";
import React, { useState } from 'react';
import { Anton } from 'next/font/google';
import { FaInfoCircle } from 'react-icons/fa'; // Import the icon

const anton = Anton({ subsets: ['latin'], weight: ['400'] });

interface ModalProps {
  title: string;
  description: string;
  details: React.ReactNode;
  registerLink?: string;  // Made optional by adding '?'
}

export function Modal({ title, description, details, registerLink }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      {/* Card */}
      <div
        className={`${anton.className} h-96 max-w-sm bg-coolGray border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 
          transition-transform transform hover:scale-105 hover:border-lYellow hover:shadow-2xl duration-300 ${
            isModalOpen ? 'blur-sm' : ''
          }`}
        onClick={openModal}
      >
        {/* Icon Section */}
        <div className="absolute top-2 right-2">
          <FaInfoCircle className="text-lYellow text-2xl" />
        </div>

        {/* Card Content */}
        <div className="p-5 h-full flex flex-col justify-between">
          <h5 className="mb-10 text-4xl tracking-tight text-lYellow">{title}</h5>
          <p className="mb-10 font-normal text-gray-300 text-lg">{description}</p>
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent default behavior
              openModal();
            }}
            className="inline-flex items-center mr-36 mb-10 px-4 py-2 text-sm font-medium text-center text-white bg-mainBlue rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-out"
          onClick={closeModal}
        >
          <div
            className="bg-lYellow p-6 rounded-lg shadow-lg max-w-md transform transition-transform duration-300 ease-out scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing the modal
          >
            <h2 className="text-2xl font-bold mb-4 text-mainBlue">{title}</h2>
            <p className="mb-4 text-gray-700">{details}</p>

            {/* Register button - only show if registerLink is provided */}
            {registerLink && (
              <a
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-center bg-mainBlue text-white rounded-lg hover:bg-blue-800 mb-4"
              >
                Register for Event
              </a>
            )}

            {/* Close button */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
