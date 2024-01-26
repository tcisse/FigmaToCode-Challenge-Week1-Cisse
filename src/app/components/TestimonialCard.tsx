"use client";

import React, { useState } from "react";

const testimonialCard = [
  {
    name: "Samy White",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profilePicture: "/assets/images/samy_white.svg",
    profile: "Cardiology Patient",
  },
  {
    name: "Arthur Northon",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profilePicture: "/assets/images/arthur.svg",
    profile: "Nutrion Patient",
  },
  {
    name: "Kevin Smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profilePicture: "/assets/images/kevin.svg",
    profile: "Orthopedics Patient",
  },
  {
    name: "Amanda Jackson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profilePicture: "/assets/images/amanda.svg",
    profile: "Ophthalmology Patient",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profilePicture: "/assets/images/samy_white.svg",
    profile: "Cardiology Patient",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profilePicture: "/assets/images/arthur.svg",
    profile: "Nutrion Patient",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profilePicture: "/assets/images/kevin.svg",
    profile: "Orthopedics Patient",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profilePicture: "/assets/images/amanda.svg",
    profile: "Ophthalmology Patient",
  },
];


export default function TestimonialCard() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 4));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 4, testimonialCard.length - 4)
    );
  };

  return (
    <div className="bg-[#F2F7FF] py-32">
      <div className="text-center mx-auto mb-20">
        <h1 className="text-4xl font-semibold max-w-xl mx-auto mb-10">
          What our great customers say about Dr. Matthew Anderson
        </h1>
        <p className="text-[#6C87AE] text-base max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <button
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          <img src="/assets/icons/prev_click.svg" alt="" />
        </button>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-5xl mx-auto">
          {testimonialCard
            .slice(currentIndex, currentIndex + 4)
            .map((index) => (
              <div
                key={index.name}
                className="flex flex-col shadow-custom-shadow rounded-custom bg-white p-testimomial_padding"
              >
                <q className="text-[#6C87AE] text-base mb-4">{index.text}</q>
                <div className="flex items-center space-x-3">
                  <div>
                    <img src={index.profilePicture} alt="" />
                  </div>
                  <div>
                    <h4 className="text-green font-medium">{index.name}</h4>
                    <span>{index.profile}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handleNextClick}
          disabled={currentIndex >= testimonialCard.length - 4}
        >
          <img src="/assets/icons/next_click.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
