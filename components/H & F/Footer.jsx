import Image from "next/image";
import React from "react";
import Logo from "@/public/KGRN Shipping/logo.jpg";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-black text-white py-10 lg:p-24 lg:gap-4">
      <div className="flex flex-col justify-center gap-10 p-4 lg:p-8">
        <Image src={Logo} width={150} height={58.5} alt="Logo" />
        <p>
          KGRN Shipping is a full-service logistics company that specialises in
          international freight forwarding, storage, distribution, and
          transportation services.
        </p>
      </div>
      <div className="flex flex-col gap-6 p-4 lg:p-8">
        <h2 className="font-semibold text-xl text-[#f25d23]">Our Company</h2>
        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Who We Are
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            About Company
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Services We Provide
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            What We Have Done
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Contact Us
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Privacy Policy
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 lg:p-8">
        <h2 className="font-semibold text-xl text-[#f25d23]">Our Services</h2>
        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Sea Freight
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Air Freight
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Third Party Warehousing &
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Logistics
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Customs Clearance
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Container &ndash; Buying & Selling
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Events and Exhibition Forwarding
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 lg:p-8">
        <h2 className="font-semibold text-xl text-[#f25d23]">
          Contact Details
        </h2>
        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Office Locations: Dubai, Abu Dhabi, Sharjah.
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            Phone: +971 4 557 0204
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            E-Mail: saravanan@kgrnshipping.com
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center hover:text-[#f25d23] transition-all duration-300"
          >
            <span className="text-xl text-[#f25d23]">
              <MdOutlineKeyboardArrowRight />
            </span>
            FAX: +971 4 557 0204
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
