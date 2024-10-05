"use client"
import React from 'react';
import { Modal } from '@/components/events'; // Import the Modal component

export function ModalGrid() {
  const modalData = [
    {
      title: 'Aarambh',
      description: 'Pitch your groundbreaking ideas and stand a chance to secure $200K in funding!',
      details: (
        <>
          <p><strong>Opportunity:</strong> Entrepreneurs can pitch their startup ideas to investors and industry leaders.</p>
          <p><strong>Prizes:</strong> Up to $200K in funding, with travel and accommodation expenses covered for finalists.</p>
          <p><strong>Semi-finals Date:</strong> 19th October</p>
          <p><strong>Venue:</strong> PESU RR Campus</p>
          <p><strong>Contact:</strong> Adithya R, +91 821776 0263</p>
        </>
      ),
    },
    {
      title: 'Best Manager',
      description: 'Competitive challenge testing leadership, decision-making, and managerial skills.',
      details: (
        <>
          <p><strong>Event Theme:</strong> Centered around the legal drama SUITS</p>
          <p><strong>Prize Pool:</strong> Rs.10,000</p>
          <p><strong>Team Size:</strong> 1 person</p>
          <p><strong>Date:</strong> 19th October</p>
          <p><strong>Registration Fee:</strong> Free</p>
        </>
      ),
    },
    {
      title: 'Sync It Up',
      description: 'Team up and pitch innovative product ideas in high-energy rounds!',
      details: (
        <>
          <p><strong>Event Format:</strong> A fast-paced 2-person team event focusing on creativity, collaboration, and presentation skills.</p>
          <p><strong>Challenge:</strong> Teams will be required to develop and pitch innovative product ideas across multiple dynamic rounds.</p>
          <p><strong>Prize Pool:</strong> Rs.15,000</p>
          <p><strong>Team Size:</strong> 2 members</p>
          <p><strong>Date:</strong> 19th October</p>
          <p><strong>Registration Fee:</strong> Free</p>
        </>
      ),
    },
    {
      title: 'Jeopardy',
      description: 'Solve complex problems in an intellectually demanding format.',
      details: (
        <>
          <p><strong>Event Format:</strong> A two-day, high-energy quiz event where teams face off in fast-paced problem-solving rounds.</p>
          <p><strong>Challenge:</strong> Participants will tackle a variety of complex puzzles, requiring both individual expertise and strong teamwork under time constraints.</p>
          <p><strong>Prize Pool:</strong> Rs.25,000</p>
          <p><strong>Team Size:</strong> 4 members</p>
          <p><strong>Registration Fee:</strong> Rs.200 per team</p>
          <p><strong>Event Dates:</strong> 19th & 20th October</p>
          <p><strong>Teams Competing:</strong> 25 teams in total</p>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="bg-mainBlue grid grid-cols-1 sm:grid-cols-2 lg:m-10 lg:mr-10 lg:grid-cols-4 gap-6 p-4">
        {modalData.map((modal, index) => (
          <Modal
            key={index}
            title={modal.title}
            description={modal.description}
            details={modal.details}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalGrid;
