"use client"
import React from 'react';
import { Modal } from '@/components/events'; // Import the Modal component

export function ModalGrid() {
  const modalData = [
    {
      title: 'AARAMBH',
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
      title: 'BEST MANAGER',
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
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSefHeRbDcR3QEib0qrF_yvDipJ33NPSd_IBNczFyCg4sEa55w/viewform',  // Registration link for Best Manager
    },
    {
      title: 'SYNC IT UP',
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
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfSnsF-59pK8LiGKSFuGxggZbfcsqvWM0of9lmRLrFamqArsA/viewform?pli=1',  // Registration link for Sync It Up
    },
    {
      title: 'JEOPARDY',
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
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScUXEF2z7yGrPBxYsJwzIu9llhXdfWp9-P2WW5DtFU2NVOejQ/viewform',  // Registration link for Jeopardy
    },
    {
      title: 'SINK OR SELL',
      description: 'Think fast, innovate faster—pitch, plan, and problem-solve your way to victory in this ultimate product development challenge!',
      details: (
        <>
          <p><strong>Event Format:</strong> A fast-paced 2-person team event focusing on creativity, collaboration, and presentation skills.</p>
          <p><strong>Challenge:</strong> Join an exciting product development challenge! Pitch ideas, plan, solve crises, and compete to win — are you ready?.</p>
          <p><strong>Prize Pool:</strong> Rs.15,000</p>
          <p><strong>Team Size:</strong> 2 members</p>
          <p><strong>Date:</strong> 19th October</p>
          <p><strong>Registration Fee:</strong> Free</p>
        </>
      ),
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdBgKidjKnvZyLejuqlxsXgxzTiinqZ1UYPRr63kQT7nCYZrg/viewform',  // Registration link for Sync It Up
    },
  ];

  return (
    <div>
      <div className="bg-mainBlue grid grid-cols-1 sm:grid-cols-2 lg:m-10 lg:mr-10 lg:grid-cols-5 gap-6 p-4">
        {modalData.map((modal, index) => (
          <Modal
            key={index}
            title={modal.title}
            description={modal.description}
            details={modal.details}
            registerLink={modal.registerLink}  // Passing the register link to each modal
          />
        ))}
      </div>
    </div>
  );
}

export default ModalGrid;
