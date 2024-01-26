import React from "react";
import Image from "next/image";

export default function BookButton() {
  return (
    <div className="flex items-center justify-center rounded-full bg-button-gradient w-[252px] py-3 gap-2">
      <Image
        src="/assets/icons/whatsapp.svg"
        width="20"
        height="20"
        alt=""
      />
      <button className="text-white text-lg font-semibold">Book an appointment</button>
    </div>
  );
}
