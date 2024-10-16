"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdEngineering, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiEarthAmerica, GiSpeedometer } from "react-icons/gi";
import { IoRocketOutline, IoStarOutline } from "react-icons/io5";
import { BsDatabaseLock } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import SectionImage from "@/public/KGRN Shipping/air-freight-service/KGRN-Air-Freight-Shipping.png";
import { FaPlay } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import PlaceHolderImage from "@/public/KGRN Shipping/air-freight-service/placeholder-288-768x512.png";

const Page = () => {
  const sectionStyle = {
    background:
      "url('/KGRN Shipping/air-freight-service/air-freight-hero-section.webp') no-repeat center center fixed",
    backgroundSize: "cover",
  };
  const sectionStyle1 = {
    background:
      "url('/KGRN Shipping/air-freight-service/Clients-Love_img-1.jpeg') no-repeat center center",
    backgroundSize: "cover",
  };

  return (
    <div>
      <section
        className="relative w-full h-[110vh] flex items-center gap-2 px-5 md:px-14 lg:px-40 animate-fade-In"
        style={sectionStyle}
      >
        <div className="container lg:w-[55%] flex z-10 flex-col items-center lg:items-start gap-6 animate-fade-In">
          <h2 className="font-semibold text-lg text-center lg:text-xl text-white">
            #ShipmentBeyondBorders
          </h2>
          <h2 className="font-semibold text-xl text-center lg:text-start lg:text-4xl text-white">
            Safe & Swift Shipment Across Borders
          </h2>
          <p className="text-white text-center lg:text-start text-sm lg:text-[16px] leading-6">
            Whether you require express delivery or global shipment, we are
            ready to provide customized Air Freight Shipping Service, ensuring
            safe and swift transportation around the world. With our global
            reach and reliable shipping solutions, we guarantee your shipments
            will reach their destination on schedule, every time.
          </p>
          <span className="before-content mb-4"></span>
          <button className="bg-[#fe5a19] text-white hover:bg-black px-6 py-4 rounded-sm font-medium flex items-center transition-all duration-300">
            Get Appointment{" "}
            <span className="text-2xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>
      </section>

      <section className="relative bg-white w-full h-[130vh] lg:h-[40vh] animate-fade-In">
        <div className="absolute w-full flex flex-col lg:flex-row justify-between items-center gap-6 -top-28 px-5 md:px-14 lg:px-48">
          <Link
            href="/services/air-freight-shipping"
            className="w-[350px] lg:w-[370px] h-[336px] bg-white flex flex-col items-center justify-center p-10 gap-6 shadow-xl"
          >
            <div className="w-[100px] h-[100px] border border-[#273171] rounded-full flex items-center justify-center">
              <div className="border bg-slate-100 rounded-full p-3">
                <span className="text-[50px] text-[#273171]">
                  <GiEarthAmerica />
                </span>
              </div>
            </div>
            <h2 className="font-semibold text-lg">Global Reach</h2>
            <p className="text-sm text-center">
              Our extensive global reach facilities ship products with your
              consumers across continents.
            </p>
          </Link>

          <Link
            href="/services/air-freight-shipping"
            className="w-[370px] h-[336px] bg-white flex flex-col items-center justify-center p-10 gap-6 shadow-xl"
          >
            <div className="w-[100px] h-[100px] border border-[#273171] rounded-full flex items-center justify-center">
              <div className="border bg-[#273171] rounded-full p-3">
                <span className="text-[50px] text-white">
                  <IoRocketOutline />
                </span>
              </div>
            </div>
            <h2 className="font-semibold text-lg">Unmatched Delivery Speed</h2>
            <p className="text-sm text-center">
              We ensure your time-critical consignments are delivered on time,
              every time.
            </p>
          </Link>

          <Link
            href="/services/air-freight-shipping"
            className="w-[370px] h-[336px] bg-white flex flex-col items-center justify-center p-10 gap-6 shadow-xl"
          >
            <div className="w-[100px] h-[100px] border border-[#273171] rounded-full flex items-center justify-center">
              <div className="border bg-slate-100 rounded-full p-3">
                <span className="text-[50px] text-[#273171]">
                  <BsDatabaseLock />
                </span>
              </div>
            </div>
            <h2 className="font-semibold text-lg">High-level of Security</h2>
            <p className="text-sm text-center">
              We implement rigorous protocols and maintain a high level of
              security to ensure trustworthy air freight shipment.
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-white w-full h-auto flex flex-col lg:flex-row items-center my-12 py-12 lg:mt-10 px-5 md:px-14 lg:px-40 animate-fade-In">
        <div className="lg:w-[45%] h-full mb-12 lg:mb-0 flex items-center justify-center">
          <div className="relative">
            <Image src={SectionImage} width={600} height={600} alt="KGRN" />
            <a
              href=""
              className="text-[#f25d23] absolute top-[45%] left-[45%] bg-white/90 p-8 rounded-full text-xl"
            >
              <FaPlay />
            </a>
          </div>
        </div>

        <div className="h-full flex flex-1 flex-col justify-center items-center lg:items-start gap-6 lg:pl-8">
          <h3 className="text-xl font-semibold text-center lg:text-start text-[#f25d23]">
            KGRN Shipping LLC Dubai
          </h3>
          <h2 className="text-2xl lg:text-4xl font-bold justify-center lg:justify-start text-center lg:text-start">
            KGRN Shipping - Your Gateway for Reliable Air Freight
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <p className="text-gray-600 leading-relaxed text-center lg:text-start">
            We take your business beyond borders. Expand your global reach with
            your consumers or clients, while we safely transport your goods and
            products over the skies. We do the loading, scheduling, air transit,
            unloading, sorting and delivering your consignments on time to any
            global destination, with precision and care. We have employed
            meticulous risk management procedures to ensure your safe air
            freight.
          </p>

          <div className="grid lg:grid-cols-3 w-full gap-6 justify-center mt-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="flex">
                <span className="text-4xl font-bold">
                  <AnimatedNumber targetNumber={358} duration={3000} />
                </span>
                <span className="text-2xl font-bold ml-2">K</span>
              </h2>
              <p className="font-bold text-gray-400">Hours of Work</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="flex">
                <span className="text-4xl font-bold">
                  <AnimatedNumber targetNumber={29} duration={3000} />
                </span>
                <span className="text-2xl font-bold ml-2">+</span>
              </h2>
              <p className="font-bold text-gray-400">Projects Done</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="flex">
                <span className="text-4xl font-bold">
                  <AnimatedNumber targetNumber={358} duration={3000} />
                </span>
                <span className="text-2xl font-bold ml-2">%</span>
              </h2>
              <p className="font-bold text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#273171] w-full py-10 lg:py-0 lg:h-[574px] flex">
        <div className="flex flex-1 px-5 md:px-14 lg:pl-40 animate-fade-In text-white flex-col justify-center gap-10 lg:gap-0 items-center">
          <div className="flex gap-4 h-[20%] w-full">
            <span className="before-content mt-4"></span>
            <h2 className="lg:text-4xl text-2xl">
              Why{" "}
              <span className="font-semibold hover:text-black transition-all duration-300">
                Choose Us
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="flex w-[327px] h-[133px] text-white">
              <div className="w-[20%]">
                <span className="text-[40px]">
                  <MdEngineering />
                </span>
              </div>
              <div className="flex flex-1 flex-col w-full gap-3">
                <h2 className="font-semibold text-lg">
                  Global Network Coverage
                </h2>
                <p className="text-xs w-full leading-6 font-medium">
                  Our vast network of shipping partners ensures seamless
                  international transportation.
                </p>
              </div>
            </div>
            <div className="flex w-[327px] h-[133px] text-white">
              <div className="w-[20%]">
                <span className="text-[40px]">
                  <IoIosTimer />
                </span>
              </div>
              <div className="flex flex-1 flex-col w-full gap-3">
                <h2 className="font-semibold text-lg">Real-Time Tracking</h2>
                <p className="text-xs w-full leading-6 font-medium">
                  Monitor your shipment with advanced tracking technology for
                  full transparency at every stage.
                </p>
              </div>
            </div>
            <div className="flex w-[327px] h-[133px] text-white">
              <div className="w-[20%]">
                <span className="text-[40px]">
                  <IoStarOutline />
                </span>
              </div>
              <div className="flex flex-1 flex-col w-full gap-3">
                <h2 className="font-semibold text-lg">
                  Eco-Friendly Solutions
                </h2>
                <p className="text-xs w-full leading-6 font-medium">
                  We offer sustainable shipping options with efficient routes
                  and eco-conscious vessels to reduce impact.
                </p>
              </div>
            </div>
            <div className="flex w-[327px] h-[133px] text-white">
              <div className="w-[20%]">
                <span className="text-[40px]">
                  <GiSpeedometer />
                </span>
              </div>
              <div className="flex flex-1 flex-col w-full gap-3">
                <h2 className="font-semibold text-lg">24/7 Support</h2>
                <p className="text-xs w-full leading-6 font-medium">
                  Our customer service team is available anytime to assist with
                  any questions or issues, ensuring constant support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-[40%] h-full hidden lg:flex"
          style={{
            background:
              "url('/KGRN Shipping/air-freight-service/Air-freight-Shipping.jpeg') no-repeat center",
          }}
        ></div>
      </section>

      <section className="w-full h-auto px-5 md:px-14 lg:px-40 animate-fade-In py-16 lg:py-24">
        <div className="flex gap-4 h-28 w-full">
          <span className="before-content mt-4"></span>
          <h2 className="lg:text-4xl text-2xl font-light text-[#273171]">
            Our Comprehensive Sea Freight Services Include:
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-0">
          <div className="w-[350px] lg:w-[370px] h-[426px] shadow-md">
            <Image
              src={PlaceHolderImage}
              width={370}
              height={246}
              alt="KGRN Shipping Services"
            />
            <div className="flex flex-1 flex-col items-center w-full gap-3 p-10">
              <h2 className="font-medium text-xl">Full Container Load</h2>
              <p className="w-full leading-6 font-light text-center text-gray-500">
                Ideal for clients with large cargo volumes requiring a full
                container.
              </p>
            </div>
          </div>
          <div className="w-[350px] lg:w-[370px] h-[426px] shadow-md">
            <Image
              src={PlaceHolderImage}
              width={370}
              height={246}
              alt="KGRN Shipping Services"
            />
            <div className="flex flex-1 flex-col items-center w-full gap-3 p-10">
              <h2 className="font-medium text-xl">Less-than-Container Load</h2>
              <p className="w-full leading-6 font-light text-center text-gray-500">
                Affordable solutions for smaller shipments, consolidated with
                other cargo.
              </p>
            </div>
          </div>
          <div className="w-[350px] lg:w-[370px] h-[426px] shadow-md">
            <Image
              src={PlaceHolderImage}
              width={370}
              height={246}
              alt="KGRN Shipping Services"
            />
            <div className="flex flex-1 flex-col items-center w-full gap-3 p-10">
              <h2 className="font-medium text-xl">Oversized Cargo Transport</h2>
              <p className="w-full leading-6 font-light text-center text-gray-500">
                Tailored services for transporting bulky or oversized items
                safely and efficiently.
              </p>
            </div>
          </div>
          <div className="w-[350px] lg:w-[370px] h-[426px] shadow-md">
            <Image
              src={PlaceHolderImage}
              width={370}
              height={246}
              alt="KGRN Shipping Services"
            />
            <div className="flex flex-1 flex-col items-center w-full gap-3 p-10">
              <h2 className="font-medium text-xl">Door-to-Door Delivery</h2>
              <p className="w-full leading-6 font-light text-center text-gray-500">
                We provide smooth, hassle-free shipping right from your
                warehouse.
              </p>
            </div>
          </div>
          <div className="w-[350px] lg:w-[370px] h-[426px] shadow-md">
            <Image
              src={PlaceHolderImage}
              width={370}
              height={246}
              alt="KGRN Shipping Services"
            />
            <div className="flex flex-1 flex-col items-center w-full gap-3 p-10">
              <h2 className="font-medium text-xl text-center lg:text-start">
                Customs Brokerage Services
              </h2>
              <p className="w-full leading-6 font-light text-center text-gray-500">
                Our in-house team of customs brokers ensures that your goods
                meet all regulatory.
              </p>
            </div>
          </div>
          <div className="w-[350px] lg:w-[370px] h-[426px] shadow-md">
            <Image
              src={PlaceHolderImage}
              width={370}
              height={246}
              alt="KGRN Shipping Services"
            />
            <div className="flex flex-1 flex-col items-center w-full gap-3 p-10">
              <h2 className="font-medium text-xl">Cargo Insurance</h2>
              <p className="w-full leading-6 font-light text-center text-gray-500">
                Protect your shipments with comprehensive insurance options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full h-[45vh] flex flex-col justify-center gap-2 px-5 md:px-14 lg:px-40 animate-fade-In"
        style={sectionStyle1}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(45,41,105,0.78)]"></div>
        <div className="h-[60%] z-10 text-white">
        <div className="flex gap-4">
          <span className="before-content mt-4"></span>
          <h2 className="lg:text-4xl text-2xl font-light">
            Clients{" "}
            <span className="font-semibold hover:text-black transition-all duration-300">
              Testimonial
            </span>
          </h2>
          
        </div>
        <p className="flex mt-4 w-full lg:w-[36%] lg:justify-end text-lg justify-center">Review Speaks For Us</p>
        </div>
      </section>

      <section className="relative bg-white w-full h-[130vh] lg:h-[40vh] animate-fade-In">
        <div className="absolute w-full flex flex-col lg:flex-row justify-between items-center gap-6 -top-28 px-5 md:px-14 lg:px-40">
          <Link
            href="/services/air-freight-shipping"
            className="w-full bg-white flex flex-col py-24 justify-center p-12 gap-6 shadow-xl rounded-xl"
          >
            <p className="text-sm text-gray-600">
              The KGRN Shipping team was extremely helpful and provided thorough
              guidance through the global shipping process. They handled our
              import and export shipments seamlessly, making the entire process
              effortless and cost-effective. Their personalized approach,
              combined with their global, sets them apart. I recommend KGRN
              Shipping for any local or international logistics services.
            </p>
            <h2 className="font-semibold text-lg">Poly Dem</h2>
          </Link>

          <Link
            href="/services/air-freight-shipping"
            className="w-full bg-white flex flex-col py-24 justify-center p-12 gap-6 shadow-xl rounded-xl"
          >
            <p className="text-sm text-gray-600">
              Working with KGRN Shipping helped our business to cater to our
              international clients. The team took accountability to help us
              maintain our relationship with our clients. From timely deliveries
              to prompt responses, the team always goes the extra mile to meet
              our objectives. We find KGRN as one of the most efficient,
              organized, and leading shipping companies in the UAE.
            </p>
            <h2 className="font-semibold text-lg">Robin Ton</h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

const AnimatedNumber = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimating(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const start = performance.now();
    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * targetNumber);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isAnimating, targetNumber, duration]);

  return <div ref={ref}>{count}</div>;
};

export default Page;
