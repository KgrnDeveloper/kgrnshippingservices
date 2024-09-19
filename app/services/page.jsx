import React from "react";
import { FaEdit, FaRegSquare } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { IoMdPhotos } from "react-icons/io";
import {
  MdOutlineAddToPhotos,
  MdOutlineKeyboardArrowRight,
  MdPhotoSizeSelectSmall,
} from "react-icons/md";

export const metadata = {
  title : "Services"
}

const Services = () => {
  const sectionStyle = {
    background:
      "url('/KGRN Shipping/ocean-freight.jpg') no-repeat center center fixed",
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
            Services
          </h2>
          <span className="before-content mb-8"></span>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col justify-center items-center py-20 animate-fade-In">
        <div className="w-[80%] flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start text-black">
            Our Services
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
        <div className="w-[80%] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-4 mt-10">
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-xl">01. </h2>
            <h2 className="font-semibold text-xl">Meticulous Planning</h2>
            <p className="text-gray-500">
              Nisi odio fuga, atque facilisis! Incidunt dictum non
            </p>
          </div>
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-xl">02. </h2>
            <h2 className="font-semibold text-xl">Completion On Time</h2>
            <p className="text-gray-500">
              Nisi odio fuga, atque facilisis! Incidunt dictum non
            </p>
          </div>
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-xl">03. </h2>
            <h2 className="font-semibold text-xl">Perfect Execution</h2>
            <p className="text-gray-500">
              Nisi odio fuga, atque facilisis! Incidunt dictum non
            </p>
          </div>
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-xl">04. </h2>
            <h2 className="font-semibold text-xl">Affordable Prices</h2>
            <p className="text-gray-500">
              Nisi odio fuga, atque facilisis! Incidunt dictum non
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col justify-center items-center pt-10 pb-20 animate-fade-In">
        <div className="w-[80%] flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start text-black">
            Our Specialization
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
        <div className="w-[80%] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4 mt-10">
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-2xl">
              <FaRegSquare />{" "}
            </h2>
            <h2 className="font-semibold text-xl">Architecture</h2>
            <p>
              A short description of this quality. Make these lines enticing
              enough to prove that you are the best in all you do.
            </p>
          </div>
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-2xl">
              <FaEdit />
            </h2>
            <h2 className="font-semibold text-xl">Landscape Design</h2>
            <p>
              A short description of this quality. Make these lines enticing
              enough to prove that you are the best in all you do.
            </p>
          </div>
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-2xl">
              <CgSandClock />{" "}
            </h2>
            <h2 className="font-semibold text-xl">Furniture Design</h2>
            <p>
              A short description of this quality. Make these lines enticing
              enough to prove that you are the best in all you do.
            </p>
          </div>
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-2xl">
              <IoMdPhotos />
            </h2>
            <h2 className="font-semibold text-xl">Exterior Design</h2>
            <p>
              A short description of this quality. Make these lines enticing
              enough to prove that you are the best in all you do.
            </p>
          </div>
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-2xl">
              <MdPhotoSizeSelectSmall />
            </h2>
            <h2 className="font-semibold text-xl">Site Planning</h2>
            <p>
              A short description of this quality. Make these lines enticing
              enough to prove that you are the best in all you do.
            </p>
          </div>
          <div className="bg-white shadow-2xl flex flex-col justify-center px-8 py-12 gap-4">
            <h2 className="text-[#f25d23] font-semibold text-2xl">
              <MdOutlineAddToPhotos />{" "}
            </h2>
            <h2 className="font-semibold text-xl">Interior Design</h2>
            <p>
              A short description of this quality. Make these lines enticing
              enough to prove that you are the best in all you do.
            </p>
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

export default Services;
