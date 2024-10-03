"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Anton } from 'next/font/google';

// Import Anton font
const anton = Anton({ subsets: ['latin'], weight: ['400'] });

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-coolGray text-lYellow font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative text-lYellow max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start text-lYellow pt-10 md:pt-40 md:gap-10"
          >
            {/* Timeline Entry Header */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timeline Dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-coolGray border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* Title with Anton Font */}
              <h3 className={`${anton.className} hidden md:block text-xl md:pl-20 md:text-7xl font-bold text-lYellow`}>
                {item.title}
              </h3>
            </div>

            {/* Timeline Entry Content */}
            <div className="relative pl-12 pr-4 md:pl-12 w-full"> {/* Adjusted left padding */}
              {/* Title for smaller screens */}
              <h3 className={`${anton.className} md:hidden block text-3xl mb-8 ml-4 text-left font-bold text-lYellow`}>
                {item.title}
              </h3>

              {/* Content Box with coolGray Background */}
              <div className="bg-coolGray p-6 rounded-lg">
                {/* Increase Font Size of Content */}
                <div className="text-neutral-100 dark:text-neutral-200 text-xl md:text-2xl font-normal">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Gradient Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-6 left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-mainBlue dark:via-mainblue to-lYellow to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-mainBlue via-lYellow to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
