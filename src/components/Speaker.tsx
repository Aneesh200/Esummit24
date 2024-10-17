import Image from 'next/image'; // Import Next.js Image component
import { Anton } from "next/font/google";
import esummitLogo from '@/public/SrinivasSarkar1.png'; // Import the image

// Import Anton font
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export function SpeakerCard() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-mainBlue p-8">
      {/* Speakers Title Aligned Left */}
      <div className="w-full">
        <h1
          className={`${anton.className} text-8xl md:text-9xl mt-8 lg:text-11xl font-extrabold mb-10 text-lYellow max-w-5xl tracking-tight leading-tight transition-opacity duration-700`}
        >
          Speaker
        </h1>
      </div>

      {/* Card Container Centered */}
      <div className="w-full max-w-[70rem] flex flex-col lg:flex-row bg-coolGray rounded-lg shadow-lg overflow-hidden mx-auto">
        {/* Speaker Image */}
        <div className="w-full lg:w-1/2 h-[30rem] lg:h-auto relative overflow-hidden">
          <Image
            src={esummitLogo}
            alt="speaker-image"
            layout="fill" // Set layout to fill to cover the div
            objectFit="cover" // Maintain aspect ratio while covering the div
            className="object-top" // Align image to the top
          />
        </div>

        {/* Speaker Info */}
        <div className="p-12 lg:p-16 flex flex-col justify-center w-full">
          {/* Title */}
          <h6 className={`uppercase text-lYellow mb-4 ${anton.className} text-3xl md:text-4xl`}>
            Keynote Speaker
          </h6>

          {/* Speaker Name */}
          <h4 className={`text-white mb-2 ${anton.className} text-6xl md:text-7xl`}>
            Srinivas Sarkar
          </h4>

          {/* Speaker Role */}
          <p className={`${anton.className} mt-2 text-lYellow mb-4 text-2xl md:text-3xl`}>
          Co-Founder & CEO, Coupl
          </p>

          {/* Speaker Description */}
          <p className="text-neutral-200 mb-8 text-xl md:text-2xl">
          Srinivas Sarkar is an Indian tech entrepreneur, co-founder and CEO of Coupl, Indias first neobank for couples. He was recognized in Forbes 30 Under 30 Asia 2024 and is a TEDx speaker, frequently sharing insights at prestigious institutions across India.
          </p>

          {/* Learn More Button */}
          <a href="https://www.linkedin.com/in/srinivas-sarkar/?originalSubdomain=in" className="inline-block">
            <button className="flex items-center gap-2 bg-lYellow text-mainBlue font-bold py-3 px-6 text-lg rounded-md hover:bg-yellow-400 transition duration-300">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SpeakerCard;
