"use client";

import React, { useState } from "react";
import Image from "next/image";
import BookButton from "./BookButton";

const serviceFeatures = [
  {
    image: "/assets/images/general.svg",
    title: "General",
    description:
      " Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    button: <BookButton />,
  },
  {
    image: "/assets/images/pediatrics.svg",
    title: "Pediatrics",
    description:
      " Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    button: <BookButton />,
  },
  {
    image: "/assets/images/nutritional.svg",
    title: "Nutritional",
    description:
      " Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    button: <BookButton />,
  },
  {
    image: "/assets/images/cardiology.svg",
    title: "Cardiology",
    description:
      " Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    button: <BookButton />,
  },
  {
    image: "/assets/images/ophthalmology.svg",
    title: "Ophthalology",
    description:
      " Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    button: <BookButton />,
  },
  {
    image: "/assets/images/orthopedics.svg",
    title: "Orthopedics",
    description:
      " Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    button: <BookButton />,
  },
];
export default function ServiceMobileCard() {
  const [currentService, setCurrentService] = useState(0);

  const handlePrevServiceClick = () => {
    setCurrentService((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextServiceClick = () => {
    setCurrentService((prevIndex) =>
      Math.min(prevIndex + 1, serviceFeatures.length - 1)
    );
  };
  return (
    <div className="space-y-14 lg:hidden block">
      <div className="relative mx-auto flex justify-center">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handlePrevServiceClick}
          disabled={currentService === 0}
        >
          <img src="/assets/icons/prev_click.svg" alt="" />
        </button>
        <div className="max-w-[1110px] mx-auto">
          {serviceFeatures
            .slice(currentService, currentService + 1)
            .map((index) => {
              return (
                <div key={index.title} className="">
                  <div className="bg-white rounded-3xl shadow-custom-shadow flex flex-col justify-between gap-4 w-[282px] p-4">
                    <div className="mx-auto">
                      <Image
                        src={index.image}
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="text-lg font-semibold">{index.title}</h1>
                    <p className="text-[#6C87AE] text-sm">
                      {index.description}
                    </p>
                    <BookButton />
                  </div>
                </div>
              );
            })}
        </div>
        <button
          className="absolute -right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handleNextServiceClick}
          disabled={currentService >= serviceFeatures.length - 1}
        >
          <img src="/assets/icons/next_click.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
