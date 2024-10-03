import React from "react";
import { Anton } from "next/font/google"; // Import the Anton font
import Image from "next/image"; // Import the Next.js Image component

// Import Anton font
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

// Company logos array (adjust paths as necessary)
const companyLogos = [
  "/src/app/public/waterbridge.png",
  "/hitachi.png",
  "/infi.png",
  "/bt.png",
  "/fidelity.png",
  "/ibm.png",
  "/airtel.png",
  "/nvidia.png",
  "/google.png",
];

export function AarambhSection() {
  return (
    <div className="bg-coolGray py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className={`${anton.className} text-10xl font-extrabold text-lYellow mb-2`}>Aarambh</h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
            Xcelerate beyond paygrade & be awesome on campus
          </p>
        </div>

        <div className="mb-8 bg-mainBlue rounded-lg shadow-lg p-8">
          <h3 className={`${anton.className} text-3xl font-bold text-lYellow mb-2`}>Tech</h3>
          <p className="text-xl mb-2">Build your startup before placement season</p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            2 weeks of intense program to discover fundable startup strategy & plan. Only 30 teams make it to the program, and 10 teams get shortlisted to present in Aarambh, attended by VCs, Pilot partners (GCC, industry & SAAS unicorns) & successful founders.
          </p>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            PVL support, Funding (up to 200K$), global pilot customer & get successful founders as investor mentors.
          </p>
        </div>

        <div className="mb-8 bg-mainBlue rounded-lg shadow-lg p-8">
          <h3 className={`${anton.className} text-3xl font-bold text-lYellow mb-2`}>MBA</h3>
          <p className="text-xl text-neutral-700 dark:text-neutral-300">CoCreate a startup by discovering & executing Route to Market strategy.</p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            2 weeks of intense program around strategic business planning for product startups. Only 30 teams make it to the program, and 10 teams get shortlisted to present in Aarambh, attended by VC’s, Pilot partners (GCC, industry & SAAS unicorns) & successful founders.
          </p>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            PVL support, Funding (up to 200K$), global pilot customer & get successful founders as investor mentors.
          </p>
        </div>

        <div className="mb-8 bg-mainBlue rounded-lg shadow-lg p-8">
          <h3 className={`${anton.className} text-3xl font-bold text-lYellow mb-2`}>Launch Pad</h3>
          <p className="text-xl text-neutral-700 dark:text-neutral-300">At least 15 full days (5 3D weeks or 15 continuous days).</p>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">Input: Shortlisted teams (based on ideas/skills, ILP will happen before).</p>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">Resources that we should be able to arrange include:</p>
          <ul className="list-disc pl-8 mt-2 text-neutral-600 dark:text-neutral-400">
            <li>CoCreate team including key members</li>
            <li>Pebble sessions</li>
            <li>Possible visit by industries</li>
            <li>Lawyers visiting over 3-4 days</li>
            <li>Hands-on mentors, resources (design, etc.)</li>
            <li>Budget of 4 lakh for the whole event covering lunch/dinner, snacks</li>
            <li>Daily fun activities (like music/jamming/quiz)</li>
          </ul>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Outcome: Pitch in Aarambh with industry partners, co-investors. Shortlist companies for phase 1 or aquihired.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <h3 className={`${anton.className} text-3xl font-bold text-lYellow mb-2`}>Invitees</h3>
        </div>
        
        {/* Logos section with hover effect */}
        <div className="flex flex-wrap justify-center mt-4">
          {companyLogos.map((logo, index) => (
            <div key={index} className="m-2 w-32 h-16 transition-transform transform hover:scale-110 hover:shadow-lg">
              <Image
                src={logo}
                alt={`Company Logo ${index + 1}`}
                layout="responsive"
                width={64} // Set width according to your needs
                height={64} // Set height according to your needs
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AarambhSection;
