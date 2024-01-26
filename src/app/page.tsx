import Image from "next/image";
import BookButton from "./components/BookButton";
import { title } from "process";
import TestimonialCard from "./components/TestimonialCard";
import ServicesCard from "./components/ServicesCard";
import ServiceMobileCard from "./components/ServiceMobileCard";
import TestimonialMobileCard from "./components/TestimonialMobileCard";

const doctorAdvantage = [
  {
    title: "+15 years of experience",
    images: "/assets/icons/clock.svg",
  },
  {
    title: "Urgent 24 hour service",
    images: "/assets/icons/check_circle.svg",
  },
  {
    title: "High quality care",
    images: "/assets/icons/medical_symbol.svg",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto flex items-center py-24">
        <div className="max-w-7xl flex lg:flex-row flex-col items-center mx-auto">
          <Image
            src="/assets/images/about_section.svg"
            width={678}
            height={405}
            alt=""
          />
          <div className="space-y-4 mx-4">
            <h4 className="text-[#00BFA5]">About me</h4>
            <h1 className="text-3xl font-bold lg:w-2/3">
              A dedicated doctor with the core mission to help
            </h1>
            <p className="text-[#6C87AE] lg:w-2/3">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
              nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
              nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
              nullam lobortis. Vulputate tortor tincidun.
            </p>
            <BookButton />
          </div>
        </div>
      </section>
      <section className="mx-auto py-24 bg-[#F2F7FF]">
        <div className="lg:max-w-5xl max-w-xs flex lg:flex-row flex-col items-center mx-auto pb-28">
          <div className="space-y-4 lg:mb-0 mb-10">
            <h4 className="text-[#00BFA5]">Services</h4>
            <h1 className="text-3xl font-bold">
              Experienced in multiple medical practices
            </h1>
            <p className="text-[#6C87AE]">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              egestas viverra turpis habitant eu sociis fermentum felis.
            </p>
            <BookButton />
          </div>
          <Image
            src="/assets/images/services_section.svg"
            width={571}
            height={405}
            alt=""
          />
        </div>
        <ServicesCard />
        <ServiceMobileCard />
      </section>
      <section className="bg-white pt-20">
        <div className="mb-44">
          <h1 className="text-[#00BFA5] text-center mb-10 font-medium">
            Book an appointment
          </h1>
          <div className="relative bg-custom-gradient rounded-[32px] lg:p-16 p-6 lg:max-w-[1068px] max-w-[298px] mx-auto">
            <img
              src="/assets/icons/plus.svg"
              className="absolute inset-0 -top-14 left-2"
              alt=""
            />
            <img
              src="/assets/icons/plus.svg"
              className="absolute -inset-0 top-48 -left-6 w-6 h-6"
              alt=""
            />
            <img
              src="/assets/icons/plus.svg"
              className="absolute -bottom-12 right-16 w-20 h-20"
              alt=""
            />
            <img
              src="/assets/icons/plus.svg"
              className="absolute -top-6 right-32 w-6 h-6"
              alt=""
            />
            <img
              src="/assets/icons/plus.svg"
              className="absolute top-8 -right-10 w-8 h-8"
              alt=""
            />
            <img
              src="/assets/icons/plus.svg"
              className="absolute -inset-0 top-[290px] w-10 h-10 left-10"
              alt=""
            />
            <div>
              <h1 className="text-white font-semibold text-center lg:text-3xl mb-4 text-2xl">
                Schedule a virtual or presential appointment today
              </h1>
              <p className="mb-6 text-base text-white lg:w-2/3 text-center mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                egestas viverra turpis habitant eu sociis fermentum felis.
              </p>
              <div className="flex items-center justify-center mx-auto rounded-full bg-white w-[252px] py-3 gap-2 text-[#3A8EF6]">
                <Image
                  src="/assets/icons/whatsapp_blue.svg"
                  width="25"
                  height="25"
                  alt=""
                />
                <button className="text-lg font-semibold">
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5 mx-4">
            <h1 className="text-[#00BFA5] text-center mb-5 font-medium">
              Why Dr. Matthew Anderson?
            </h1>
            <div className="relative flex justify-center">
              <img
                src="/assets/icons/play.svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt=""
              />
              <img src="/assets/images/doctor_hero.svg" alt="" />
            </div>
          </div>
          <div className="text-center mb-20">
            <h1 className="lg:text-4xl text-2xl font-semibold mb-5">
              A dedicated doctor with the core mission to help
            </h1>
            <p className="text-base text-[#6C87AE] lg:w-2/4 text-center mx-4">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
              nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
              nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
              nullam lobortis. Vulputate tortor tincidun.
            </p>
          </div>
          <div className="mb-20">
            <div className="flex lg:flex-row flex-col justify-center lg:space-y-0 space-y-5 lg:max-w-[865px] mx-auto">
              <div className="flex bg-custom-gradient rounded-xl p-2 items-center space-x-3 lg:max-w-[865px] max-w-[285px] mx-auto">
                <Image
                  src="/assets/icons/clock.svg"
                  height={38}
                  width={38}
                  alt=""
                />
                <h2 className="text-white font-semibold text-lg">
                  +15 years of experience
                </h2>
              </div>
              <div className="flex bg-custom-gradient rounded-xl p-2 items-center space-x-3 lg:max-w-[865px] max-w-[285px] mx-auto">
                <Image
                  src="/assets/icons/check_circle.svg"
                  height={38}
                  width={38}
                  alt=""
                />
                <div className="">
                  <h2 className="text-white font-semibold text-lg">
                    Urgent 24 hour service
                  </h2>
                </div>
              </div>
              <div className="flex bg-custom-gradient rounded-xl p-2 items-center space-x-3 lg:max-w-[865px] max-w-[250px] mx-auto">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialCard />
      <TestimonialMobileCard />
    </div>
  );
}
