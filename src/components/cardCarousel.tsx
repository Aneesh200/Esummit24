"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from '@/components/speakerCard'; // Import your Card component

export function CardCarousel() {
  const cardData = [
    {
      image: '/src/app/public/esummit24.png',
      title: 'Card Title 1',
      description: 'Short description for card 1',
      details: 'Detailed information for card 1',
    },
    {
      image: '/src/app/public/esummit24.png',
      title: 'Card Title 2',
      description: 'Short description for card 2',
      details: 'Detailed information for card 2',
    },
    {
      image: '/src/app/public/esummit24.png',
      title: 'Card Title 3',
      description: 'Short description for card 3',
      details: 'Detailed information for card 3',
    },
    {
        image: '/src/app/public/try3.png',
        title: 'Card Title 3',
        description: 'Short description for card 3',
        details: 'Detailed information for card 3',
    },
    // Add more cards as needed
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Carousel for mobile screens */}
      <div className="sm:hidden">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          infiniteLoop={true}
          dynamicHeight={true}
        >
          {cardData.map((card, idx) => (
            <Card
              key={idx}
              image={card.image}
              title={card.title}
              description={card.description}
              details={card.details}
            />
          ))}
        </Carousel>
      </div>

      {/* Grid Layout for desktop */}
      <div className="hidden sm:grid sm:grid-cols-4 gap-6">
        {cardData.map((card, idx) => (
          <Card
            key={idx}
            image={card.image}
            title={card.title}
            description={card.description}
            details={card.details}
          />
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
