import ShootingStarsAndStarsBackgroundDemo from "@/components/hero"
import { ModalGrid } from "@/components/eventsGrid";
import { Anton } from 'next/font/google'
const anton = Anton({ subsets: ['latin'], weight: ['400'] });
import { TimelineDemo } from "@/components/Timeline";
import "./globals.css";
import SpeakerCard from "@/components/Speaker";
export default function Home() {
  return (
    <>
      <div>
        <ShootingStarsAndStarsBackgroundDemo />
        <SpeakerCard/>
        <div className="bg-coolgray">{/* <CardCarousel/> */}</div>
        <br></br>
        <br></br>
        <TimelineDemo />
      </div>
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
      {/* <AarambhSection/> */}
    </>
  );
}
