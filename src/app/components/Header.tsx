import Image from "next/image";
import Link from "next/link";
import BookButton from "./BookButton";
import { lazy } from "react";

export default function Header() {
  return (
    <div>
      <div className="hidden lg:block">
        <header className="bg-[#F2F7FF] flex justify-between items-center px-44 py-3">
          <div>
            <Image
              src="/assets/images/header_logo.svg"
              height={49}
              width={149}
              alt=""
            />
          </div>
          <ul className="flex gap-5 text-base">
            <Link href="" className="hover:text-[#3A8EF6] cursor-pointer">
              Home
            </Link>
            <Link href="" className="hover:text-[#3A8EF6] cursor-pointer">
              About
            </Link>
            <Link href="" className="hover:text-[#3A8EF6] cursor-pointer">
              Services
            </Link>
            <Link href="" className="hover:text-[#3A8EF6] cursor-pointer">
              Contact
            </Link>
          </ul>
          <div className="bg-button-gradient flex items-center justify-center rounded-full text-white space-x-2 py-2 px-5">
            <Image
              src="/assets/icons/message_circle.svg"
              width="20"
              height="20"
              alt=""
            />
            <button className="">Book now</button>
          </div>
        </header>
      </div>
      <div className="lg:hidden block">
        <header className="bg-[#F2F7FF] flex justify-between items-center px-4">
          <img src="/assets/images/header_logo.svg" alt="" />
          <div className="pt-5">
            <img src="/assets/icons/mobile_menu.svg" alt="" />
          </div>
        </header>
      </div>
      <section className="mx-auto flex items-center bg-[#F2F7FF] py-24">
        <div className="lg:max-w-7xl max-w-xs flex lg:flex-row flex-col-reverse items-center mx-auto">
          <div className="space-y-4 lg:text-left text-center">
            <h4 className="text-[#00BFA5]">Dr. Matthew Anderson</h4>
            <h1 className="text-5xl font-bold">
              A dedicated doctor you can trust
            </h1>
            <p className="text-[#6C87AE]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              eget vel, nunc nulla feugiat. Metus ut.
            </p>
            <BookButton />
          </div>
          <div className="">
            <Image
              src="/assets/images/hero_section.svg"
              width={678}
              height={506}
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex lg:flex-row flex-col justify-center lg:space-x-5 lg:space-y-0 space-y-5 -mt-10 lg:max-w-[865px] mx-auto">
          <div className="flex bg-custom-gradient rounded-xl p-2 items-center space-x-3 -px-20 lg:max-w-[865px] max-w-[230px] mx-auto">
            <Image
              src="/assets/icons/clock.svg"
              height={38}
              width={38}
              alt=""
              loading="lazy"
            />
            <div className="">
              <h2 className="text-white font-semibold text-lg">
                24 hour service
              </h2>
              <p className="text-white font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-custom-gradient rounded-xl p-2 items-center space-x-3 max-w-[260px] mx-auto">
            <Image
              src="/assets/icons/check_circle.svg"
              height={38}
              width={38}
              alt=""
            />
            <div className="">
              <h2 className="text-white font-semibold text-lg">
                8 years of experience
              </h2>
              <p className="text-white font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex bg-custom-gradient rounded-xl p-2 items-center space-x-3 lg:max-w-[865px] max-w-[230px] mx-auto">
            <Image
              src="/assets/icons/medical_symbol.svg"
              height={38}
              width={38}
              alt=""
            />
            <div className="">
              <h2 className="text-white font-semibold text-lg">
                High quality care
              </h2>
              <p className="text-white font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
