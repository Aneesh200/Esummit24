import ShootingStarsAndStarsBackgroundDemo from "@/components/hero"
import { ModalGrid } from "@/components/eventsGrid";
import { Anton } from 'next/font/google'
const anton = Anton({ subsets: ['latin'], weight: ['400'] });
import { TimelineDemo } from "@/components/Timeline";
import "./globals.css";
export default function Home() {
  return (
    <>
      <div>
        <ShootingStarsAndStarsBackgroundDemo />
        <h1
          className={`${anton.className} p-10 absolute text-8xl md:text-9xl lg:text-11xl font-extrabold text-anton text-lYellow z-10 max-w-5xl tracking-tight leading-tight text-left flex flex-col md:flex-row items-start gap-2 md:gap-8 transition-opacity duration-700`}
        >
          <p>Events</p>
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ModalGrid />
        <div className="bg-coolgray">{/* <CardCarousel/> */}</div>
        <br></br>
        <br></br>
        <TimelineDemo />
      </div>
      <div className="p-10">
      <h1
        className={`${anton.className} text-8xl md:text-9xl lg:text-11xl font-extrabold text-lYellow z-10 max-w-5xl tracking-tight leading-tight transition-opacity duration-700`}
      >
        Speakers
      </h1>

      {/* Typewriter Effect for Coming Soon */}
      <div className="relative mt-4 md:mt-6">
        <span className={`${anton.className} text-5xl text-lYellow typewriter`}>
          Coming Soon ..
        </span>
      </div>
    </div>
      <br></br>
      <br></br>
      {/* <AarambhSection/> */}
    </>
  );
}
