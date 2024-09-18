import { FaPhone } from "react-icons/fa";
import { MdDone, MdOutlineKeyboardArrowRight } from "react-icons/md";
import imageShippingOne from "@/public/KGRN Shipping/KGRN Shipping Company.jpg";
import imageShippingTwo from "@/public/KGRN Shipping/Third Party Warehousing & Logistics.jpg";
import imageShippingThree from "@/public/KGRN Shipping/Container - Buying & Selling.jpg";
import Earth from "@/public/KGRN Shipping/earth-animation-4.gif";
import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";

export default function Home() {
  const sectionStyle = {
    background:
      "url('/KGRN Shipping/KGRN Shipping BG - Hero Section.webp') no-repeat center center fixed",
    backgroundSize: "cover",
  };
  const sectionStyle2 = {
    background:
      "url('/KGRN Shipping/KGRN Shipping BG 2.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
  };
  const sectionStyle3 = {
    background:
      "url('/KGRN Shipping/Air-Freight-Benefits.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
  };
  const sectionStyle4 = {
    background:
      "url('/KGRN Shipping/ocean-freight.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
  };
  const cards = [
    {
      title: "Container - Buying & Selling",
      src: imageShippingThree,
      list: [
        "General Purpose containers",
        "Open Top containers",
        "High Cube containers",
        "Refrigerated container",
      ],
    },
    {
      title: "Container - Buying & Selling",
      src: imageShippingThree,
      list: ["PTI certified", "CSC plated", "Cargo worthy", "Seaworthy"],
    },
    {
      title: "Container - Buying & Selling",
      src: imageShippingThree,
      list: [
        "Pre-show planning and assistance with necessary documentation including shipping instructions, availability forms, duties and tax, insurance, and other related materials.",
      ],
    },
  ];
  return (
    <div>
      <section
        className="relative w-full h-screen flex items-center gap-2 px-4"
        style={sectionStyle}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
        <div className="container flex z-10 flex-col justify-center items-center gap-4 animate-fade-In">
          <h2 className="font-semibold text-4xl text-center lg:text-6xl text-white">
            KGRN <span className="text-[#fe5a19]">SHIPPING</span> SERVICE FROM
            DUBAI
          </h2>
          <p className="text-white/60 text-center text-sm lg:text-md">
            Best Logistic Company in UAE. Fast, Reliable and Safe!
          </p>
          <span className="before-content mb-8"></span>
          <button className="bg-[#fe5a19] text-white hover:bg-black px-6 py-4 rounded-sm font-medium flex items-center transition-all duration-300">
            Get In Touch{" "}
            <span className="text-2xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col lg:flex-row items-center my-12 lg:my-28 px-5 md:px-14 lg:px-40 animate-fade-In">
        <div className="lg:w-[50%] h-full flex flex-col justify-center gap-8 pr-0 lg:pr-8">
          <h2 className="text-2xl lg:text-4xl font-bold leading-normal justify-center lg:justify-start text-center lg:text-start">
            Welcome to the KGRN <br className="hidden lg:flex" /> Shipping
            Company
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <h3 className="text-xl font-semibold text-center lg:text-start">
            Where We Build Your Visions
          </h3>
          <p className="text-gray-600 leading-relaxed text-center lg:text-start">
            KGRN Shipping is a full-service logistics company that specialises
            in international freight forwarding, storage, distribution, and
            transportation services. Through our vast network of partners, we
            offer freight forwarding and logistics services globally from our
            headquarters in Dubai.
          </p>
          <p className="text-gray-600 leading-relaxed text-center lg:text-start">
            Tell people a little more to attract.You can mention some contact
            details as shown below to get in touch with visitors.
          </p>
          <div className="flex flex-col gap-4 mt-4 lg:mt-8">
            <h3 className="flex items-center justify-center lg:justify-start font-semibold gap-4">
              <span>
                <FaPhone />
              </span>
              Call Us Today
            </h3>
            <h3 className="font-semibold text-3xl flex justify-center lg:justify-start">
              +971 4557 0204
            </h3>
          </div>
        </div>
        <div className="h-full mt-12 lg:mt-0 flex items-center justify-center">
          <div className="ml-8 lg:ml-24 mt-8">
            <div className="border-4 border-[#f25d23] pb-8 lg:pb-12">
              <Image
                src={imageShippingOne}
                width={511}
                height={575}
                alt="KGRN Shipping Image"
                className="lg:-ml-12 lg:-mt-12 -mt-8 -ml-8"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative w-full h-[33rem] flex items-center justify-center bg-gray-200"
        style={sectionStyle2}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></div>
        <div className="container lg:w-[45vw] flex z-10 flex-col justify-center items-center gap-8 animate-fade-In px-4">
          <span className="before-content flex justify-center lg:justify-start"></span>
          <h2 className="text-2xl lg:text-4xl text-white font-semibold leading-normal justify-center text-center">
            Get Your Price Estimation Quote
          </h2>
          <p className="text-white/90 leading-relaxed text-center font-light">
            KGRN is well-versed in customs procedures and processes, and we are
            electronically connected to the department. We expedite all
            paperwork requirements to pass your shipment through customs,
            allowing your products to remain &apos;on the move.&apos;
          </p>
          <button className="bg-[#fe5a19] text-white hover:bg-black px-6 py-4 mt-8 rounded-sm font-medium flex items-center transition-all duration-300">
            Call +971 4557 0204{" "}
            <span className="text-2xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col lg:flex-row items-center my-12 py-12 lg:my-28 px-5 md:px-14 lg:px-40 animate-fade-In">
        <div className="lg:w-[50%] h-full mb-12 lg:mb-0 flex items-center justify-center">
          <div className="flex items-center justify-center ml-6 lg:ml-0 lg:mt-10">
            <div className="border-4 border-[#f25d23] pb-6 lg:pb-12">
              <Image
                src={imageShippingTwo}
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
            Third Party Warehousing &<br className="hidden lg:flex" /> Logistics
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <h3 className="text-xl font-semibold text-center lg:text-start">
            Where We Build Your Visions
          </h3>
          <p className="text-gray-600 leading-relaxed text-center lg:text-start">
            Within the logistics business, warehousing and storage is a
            fast-paced, highly specialized profession. KGRN offers warehouse,
            storage, and distribution services that may help your company gain a
            competitive edge.
          </p>
          <p className="text-gray-600 leading-relaxed text-center lg:text-start">
            We operate modern warehouse facilities at different locations in
            U.A.E including a facility inside the free trade zone.
          </p>
          <p className="text-gray-600 leading-relaxed text-center lg:text-start">
            Our service offering comprises of:
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Storage
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Distribution
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Pick & Pack
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Packing
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Labeling
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-lg hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Return Processing
            </h5>
          </div>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col lg:flex-row items-center my-12 lg:my-28 px-5 md:px-14 lg:px-40 animate-fade-In">
        <div className="lg:w-[50%] h-full flex flex-col justify-center gap-8 pr-0 lg:pr-8">
          <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start">
            Why KGRN?
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <div className="flex flex-col gap-4 font-light">
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              We have service contracts with major worldwide shipping lines.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              We can move your cargo from/to any part of the world, with our
              partners.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Contracts and special arrangements with major airlines to
              facilitate air export and import every day.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Well experienced Project Team for Project forwarding, heavy-lift,
              chartering, etc.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              The in-house fleet of vehicles and support staff for packing,
              crating, palletization, moving, etc.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Round the clock (24 hours) customs-clearance desk.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Comprehensive portfolio of time-definite and cost-saving freight
              solutions.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Our well-trained and experienced staff, which includes experts in
              the fields of export, import, consolidation, and warehousing, will
              design a solution to reduce your logistics costs and delivery
              times.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 mt-14 lg:mt-0 py-8 lg:py-8 h-[36rem] gap-4 bg-gradient-to-b from-white to-blue-300 px-8">
          <h2 className="text-xl lg:text-2xl font-semibold justify-center lg:justify-start text-center lg:text-start">
            Project Forwarding & Chartering Services
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <p className="text-center lg:text-start">
            KGRN has a long history of transporting goods that cannot be
            containerized due to its size or needs unique handling. Project
            planning, vessel chartering, route selection, packing, haulage,
            cranes, overseas handling, storage, and delivery are among the
            services we provide.
          </p>
          <p className="text-center lg:text-start">
            Flat racks and open tops, as well as dry general and reefer boxes in
            a variety of sizes, are among the special equipment options
            available to ensure safe and cost-effective transportation.
            Equipment for long-term storage that is safe may also be made
            accessible.
          </p>
        </div>
      </section>
      <section
        className="relative w-full lg:h-[33rem] flex items-center justify-center bg-gray-200"
        style={sectionStyle3}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
        <div className="container w-full h-auto lg:w-[80vw] lg:h-[70%] flex flex-col lg:flex-row z-10 px-4 my-10 lg:my-0">
          <div className="lg:w-[50%] h-full flex flex-col justify-center gap-6 pr-0 lg:pr-8">
            <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start text-white">
              Air Freight
            </h2>
            <span className="before-content flex justify-center lg:justify-start"></span>
            <div className="flex flex-col gap-4 lg:mt-4">
              <p className="text-white leading-relaxed text-sm font-light text-center lg:text-start">
                With our comprehensive portfolio of time-definite and
                cost-saving options, KGRN can meet your air freight
                requirements.
              </p>
              <p className="text-white leading-relaxed text-sm font-light text-center lg:text-start">
                KGRN provides complete air freight solutions tailored to our
                customer needs. We offer both air export and air import
                services.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 mt-14 lg:mt-0 py-8 lg:py-8 gap-4 bg-[#ff6223] px-8">
            <h2 className="text-xl lg:text-2xl font-semibold justify-center lg:justify-start text-center lg:text-start text-white">
              Our services
            </h2>
            <span className="before-contentB flex justify-center lg:justify-start"></span>
            <div className="flex flex-col gap-2">
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Standard & Economy service
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Consolidation
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Sea-Air Services
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Pallet building (ULD)
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Aircraft Chartering Services
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Dangerous goods
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Door-to-Door
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col justify-center items-center py-20">
        <div className="w-[80%] flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start text-black">
            Customs Clearance
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <div className="flex flex-col gap-4 lg:mt-4">
            <p className="text-black leading-relaxed text-sm font-light text-center lg:text-start">
              KGRN takes care of the difficult job of arranging and expediting
              your shipments through Customs. Our Brokers make certain that the
              proper customs tax is paid and that all other legal requirements
              are met. KGRN is well-versed in customs procedures and processes,
              and we are electronically connected to the department. We expedite
              all paperwork requirements to pass your shipment through customs,
              allowing your products to remain &apos;on the move.&apos;
            </p>
          </div>
        </div>
        <div className="w-[80%] h-auto flex justify-between items-center mt-10">
          <FocusCards cards={cards} />
        </div>
      </section>
      <section
        className="relative w-full lg:h-[33rem] flex items-center justify-center bg-gray-200"
        style={sectionStyle4}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
        <div className="container w-full h-auto lg:w-[80vw] lg:h-[70%] flex flex-col lg:flex-row z-10 px-4 my-10 lg:my-0">
          <div className="lg:w-[50%] h-full flex flex-col justify-center gap-6 pr-0 lg:pr-8">
            <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start text-white">
              Ocean Freight
            </h2>
            <span className="before-content flex justify-center lg:justify-start"></span>
            <div className="flex flex-col gap-4 lg:mt-4">
              <p className="text-white leading-relaxed text-sm font-light text-center lg:text-start">
                KGRN has a large network of sites and significant ocean freight
                expertise to provide you with a comprehensive range of worldwide
                freight and transportation services. From less-than-container
                loads to full container loads, unique equipment, and large
                goods, we can handle virtually any size of transport. You can
                manage your maritime freight services globally from a single
                place.
              </p>
              <p className="text-white leading-relaxed text-sm font-light text-center lg:text-start">
                KGRN provides complete Sea freight solutions tailored to our
                customer needs. We offer both sea export and sea import
                services.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 mt-14 lg:mt-0 py-8 lg:py-8 gap-4 bg-[#ff6223] px-8">
            <h2 className="text-xl lg:text-2xl font-semibold justify-center lg:justify-start text-center lg:text-start text-white">
              Our services
            </h2>
            <span className="before-contentB flex justify-center lg:justify-start"></span>
            <div className="flex flex-col gap-2">
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                FCL-Full Container Load
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                LCL-Less than Container Load
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Sea freight Door-to-Door
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Sea freight Port-to-Port
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Documentation services
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Breakbulk services
              </p>
              <p className="flex items-center text-white font-light gap-2">
                <span className="text-black text-2xl font-bold">
                  <MdDone />
                </span>
                Consolidation
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col lg:flex-row items-center my-8 px-5 md:px-14 lg:px-40 animate-fade-In">
        <div className="lg:w-[70%] h-full flex flex-col justify-center gap-8 pr-0 lg:pr-8">
          <h2 className="text-lg lg:text-2xl font-semibold justify-center lg:justify-start text-center lg:text-start">
            Direct Pick-up of your exhibition shipment from any location in the
            world
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <div className="flex flex-col gap-4 font-light">
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Shipping services via Air & Sea freight, schedule International
              transport management.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Quick and hassle free customs clearance.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Arrange direct delivery to your exhibition booth with Speed - On
              schedule Safety.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Well experienced Project Team for Project forwarding, heavy-lift,
              chartering, etc.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Storage of empty rates and packaging materials during the fair.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Return transportation to your facility, another trade fair, or
              destination of your choice with Door-to-Door services.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f25f23] text-2xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              On-ste operation, assistance and supervision on installation &
              dismantling of exhibits.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 py-8 lg:py-8 h-[36rem] gap-4 bg-white px-8">
          <Image src={Earth} width={300} height={300} alt="Earth" />
          <button className="bg-[#fe5a19] text-white hover:bg-black px-6 py-4 mt-8 rounded-sm font-medium flex items-center transition-all duration-300">
            Call +971 4557 0204{" "}
            <span className="text-2xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
