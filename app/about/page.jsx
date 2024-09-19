import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import imageShippingOne from "@/public/KGRN Shipping/Third Party Warehousing & Logistics.jpg";
import Requirement from "@/public/KGRN Shipping/requirements-1.jpg";
import Worker from "@/public/KGRN Shipping/worker.jpg";
import Building from "@/public/KGRN Shipping/building.jpg";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const metadata = {
  title : "About Us"
}

const About = () => {
  const sectionStyle = {
    background:
      "url('/KGRN Shipping/Air-Freight-Benefits.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
  };
  const sectionStyle1 = {
    background:
      "url('/KGRN Shipping/ocean-freight.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
  };
  return (
    <div>
      <section
        className="relative w-full h-[70vh] flex items-center gap-2 px-4"
        style={sectionStyle}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
        <div className="container flex z-10 flex-col justify-center items-center gap-4 animate-fade-In mt-20">
          <h2 className="font-semibold text-4xl text-center lg:text-6xl text-white">
            About Us
          </h2>
          <span className="before-content mb-8"></span>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col lg:flex-row items-center my-12 py-12 lg:mt-28 px-5 md:px-14 lg:px-40 animate-fade-In">
        <div className="lg:w-[50%] h-full mb-12 lg:mb-0 flex items-center justify-center">
          <div className="flex items-center justify-center ml-6 lg:ml-0 lg:mt-10">
            <div className="border-4 border-[#f25d23] pb-6 lg:pb-12">
              <Image
                src={imageShippingOne}
                width={511}
                height={575}
                alt="KGRN Shipping Image"
                className="lg:-ml-12 lg:-mt-12 -mt-6 -ml-6"
              />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-1 flex-col justify-center items-center lg:items-start gap-6 lg:pl-8">
          <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start">
            Our Story
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <p className="text-gray-600 leading-relaxed text-center lg:text-start">
            You can add here some history of your company.You can mention all
            the benefits or services with some real examples. You can also state
            how you emphasize on their well being. This often shows your concern
            and increases the chances of conversion. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Professional Specialist
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Precise Builders
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Brilliant Ideas
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              24/7 Assiatance
            </h5>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 w-full h-auto flex flex-col justify-center items-center py-20 animate-fade-In">
        <div className="w-[80%] flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start text-black">
            What We Offer
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <div className="flex flex-col gap-4 lg:mt-4">
            <p className="text-black leading-relaxed text-sm font-light text-center lg:text-start">
              You can use these sections to highlight the features of heading.
              Use these paragraphs to focus on the topic you want. Make sure you
              keep it short and attractive.
            </p>
          </div>
        </div>
        <div className="w-[80%] h-auto flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center items-center mt-10">
          <div className="lg:w-[400px] lg:h-[500px] flex flex-col shadow-2xl bg-white">
            <Image
              src={Requirement}
              width={400}
              height={237}
              alt="KGRN Shipping Image"
            />
            <div className="flex flex-col gap-4 p-10 items-center justify-center">
              <h2 className="font-semibold text-xl text-center">
                We Understand Requirements
              </h2>
              <p className="leading-relaxed text-gray-500 text-center">
                Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel
                nisl. Nam blandit maximus tristique.
              </p>
              <Link
                href={"/about"}
                className="hover:text-[#f25d23] hover:translate-x-2 font-medium flex gap-1 transition-all duration-300 items-center"
              >
                Learn More{" "}
                <span className="text-[#f25d23]">
                  <IoIosArrowForward />
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:w-[400px] lg:h-[500px] flex flex-col shadow-2xl bg-white">
            <Image
              src={Worker}
              width={400}
              height={237}
              alt="KGRN Shipping Image"
            />
            <div className="flex flex-col gap-4 p-10 items-center justify-center">
              <h2 className="font-semibold text-xl">We Work Precisely</h2>
              <p className="leading-relaxed text-gray-500 text-center">
                Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel
                nisl. Nam blandit maximus tristique.
              </p>
              <Link
                href={"/about"}
                className="hover:text-[#f25d23] hover:translate-x-2 font-medium flex gap-1 transition-all duration-300 items-center"
              >
                Learn More{" "}
                <span className="text-[#f25d23]">
                  <IoIosArrowForward />
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:w-[400px] lg:h-[500px] flex flex-col shadow-2xl bg-white">
            <Image
              src={Building}
              width={400}
              height={237}
              alt="KGRN Shipping Image"
            />
            <div className="flex flex-col gap-4 p-10 items-center justify-center">
              <h2 className="font-semibold text-xl">We Deliver Best Output</h2>
              <p className="leading-relaxed text-gray-500 text-center">
                Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel
                nisl. Nam blandit maximus tristique.
              </p>
              <Link
                href={"/about"}
                className="hover:text-[#f25d23] hover:translate-x-2 font-medium flex gap-1 transition-all duration-300 items-center"
              >
                Learn More{" "}
                <span className="text-[#f25d23]">
                  <IoIosArrowForward />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative w-full h-[50vh] flex items-center gap-2 px-4"
        style={sectionStyle1}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
        <div className="container flex z-10 flex-col justify-center items-center gap-4 animate-fade-In">
          <span className="before-content mb-8"></span>
          <h2 className="font-semibold text-2xl text-center lg:text-4xl text-white">
            We Provide the Best Service in Industry
          </h2>
          <p className="text-white/60 text-center text-sm lg:text-md">
            Add a line that tells users how easily they can get in touch with
            you
          </p>

          <button className="bg-[#fe5a19] absolute -bottom-7 text-white hover:bg-black px-6 py-4 rounded-sm font-medium flex items-center transition-all duration-300">
            Call +971 4557 0204{" "}
            <span className="text-2xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
