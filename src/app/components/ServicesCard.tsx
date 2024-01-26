import React from "react";
import Image from "next/image";
import BookButton from "./BookButton";

export default function ServicesCard() {
  return (
    <div>
      <div className="space-y-14">
        <div className="max-w-[1110px] mx-auto flex flex-row gap-10 justify-center">
          <div className="bg-white rounded-3xl shadow-custom-shadow flex flex-col justify-between gap-4 w-[282px] p-4">
            <div className="mx-auto">
              <Image
                src="/assets/images/general.svg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <h1 className="text-lg font-semibold">General</h1>
            <p className="text-[#6C87AE] text-sm">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
              iTristique id nibh lobortis nunc
            </p>
            <BookButton />
          </div>
          <div className="bg-white rounded-3xl shadow-custom-shadow flex flex-col justify-between gap-4 w-[282px] p-4">
            <div className="mx-auto">
              <Image
                src="/assets/images/pediatrics.svg"
                width={180}
                height={200}
                alt=""
              />
            </div>
            <h1 className="text-lg font-semibold">Pediatrics</h1>
            <p className="text-[#6C87AE] text-sm">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
              iTristique id nibh lobortis nunc
            </p>
            <BookButton />
          </div>
          <div className="bg-white rounded-3xl shadow-custom-shadow flex flex-col justify-between gap-4 w-[282px] p-4">
            <div className="mx-auto">
              <Image
                src="/assets/images/nutritional.svg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <h1 className="text-lg font-semibold">Nutritional</h1>
            <p className="text-[#6C87AE] text-sm">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
              iTristique id nibh lobortis nunc
            </p>
            <BookButton />
          </div>
        </div>
        <div className="max-w-[1110px] mx-auto flex flex-row gap-10 justify-center">
          <div className="bg-white rounded-3xl shadow-custom-shadow flex flex-col justify-between gap-4 w-[282px] p-4">
            <div className="mx-auto">
              <Image
                src="/assets/images/cardiology.svg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <h1 className="text-lg font-semibold">Cardiology</h1>
            <p className="text-[#6C87AE] text-sm">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
              iTristique id nibh lobortis nunc
            </p>
            <BookButton />
          </div>
          <div className="bg-white rounded-3xl shadow-custom-shadow flex flex-col justify-between gap-4 w-[282px] p-4">
            <div className="mx-auto">
              <Image
                src="/assets/images/ophthalmology.svg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <h1 className="text-lg font-semibold">Ophthalology</h1>
            <p className="text-[#6C87AE] text-sm">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
              iTristique id nibh lobortis nunc
            </p>
            <BookButton />
          </div>
          <div className="bg-white rounded-3xl shadow-custom-shadow flex flex-col justify-between gap-4 w-[282px] p-4">
            <div className="mx-auto">
              <Image
                src="/assets/images/orthopedics.svg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <h1 className="text-lg font-semibold">Orthopedics</h1>
            <p className="text-[#6C87AE] text-sm">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
              iTristique id nibh lobortis nunc
            </p>
            <BookButton />
          </div>
        </div>
      </div>
    </div>
  );
}
