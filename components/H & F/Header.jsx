"use client";
import Logo from "@/public/KGRN Shipping/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full absolute top-0 z-20 bg-transparent h-28 flex items-center justify-between px-5 md:px-14 lg:px-40">
      <Image src={Logo} width={120} height={58.5} alt="Logo" />
      <div className="text-white hidden lg:flex">
        <ul className="flex gap-8 items-center">
          <Link href={"/"} className="text-[15px] hover:text-[#fe5a19]">
            Home
          </Link>
          <Link href={"/about"} className="text-[15px] hover:text-[#fe5a19]">
            About
          </Link>
          <Link href={"/services"} className="text-[15px] hover:text-[#fe5a19]">
            Services
          </Link>
          <Link href={"/"} className="text-[15px] hover:text-[#fe5a19]">
            Projects
          </Link>
          <Link href={"/"} className="text-[15px] hover:text-[#fe5a19]">
            Contact Us
          </Link>
          <a href={"/"} className="text-md hover:text-[#fe5a19]">
            <FaFacebookSquare />
          </a>
          <a href={"/"} className="text-md hover:text-[#fe5a19]">
            <FaXTwitter />
          </a>
          <a href={"/"} className="text-md hover:text-[#fe5a19]">
            <FaInstagram />
          </a>
        </ul>
      </div>
      <div className="lg:hidden text-3xl text-[#fe5a19] pr-4 transition-all duration-300">
        {openMenu ? (
          <IoMdClose
            onClick={() => setOpenMenu(false)}
            aria-label="Close menu"
          />
        ) : (
          <IoMenu onClick={() => setOpenMenu(true)} aria-label="Open menu" />
        )}
      </div>
      {openMenu && (
        <div className="bg-white max-h-fit text-black fixed top-28 bottom-0 right-0 left-0 w-full z-100 rounded-md shadow-md">
          <div className="p-4 my-5 flex flex-col gap-5 text-[18px] font-light">
            <Link
              href={"/"}
              className="text-lg"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-lg"
              onClick={() => setOpenMenu(false)}
            >
              About
            </Link>
            <Link
              href={"/about"}
              className="text-lg"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </Link>
            <Link
              href={"/services"}
              className="text-lg"
              onClick={() => setOpenMenu(false)}
            >
              Projects
            </Link>
            <Link
              href={"/"}
              className="text-lg"
              onClick={() => setOpenMenu(false)}
            >
              Contact Us
            </Link>
            <div className="flex items-center justify-center gap-4">
            <a href={"/"} className="text-lg">
              <FaFacebookSquare />
            </a>
            <a href={"/"} className="text-lg">
              <FaXTwitter />
            </a>
            <a href={"/"} className="text-lg">
              <FaInstagram />
            </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
