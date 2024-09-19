import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import imageShippingOne from "@/public/KGRN Shipping/project-3-1.jpg";
import icon1 from "@/public/KGRN Shipping/project-users/testimonial-image-150x150.jpg";

export const metadata = {
    title : "Projects"
  }

const Projects = () => {
  const sectionStyle = {
    background:
      "url('/KGRN Shipping/KGRN Shipping BG 2.jpg') no-repeat center center fixed",
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
            Projects
          </h2>
          <span className="before-content mb-8"></span>
        </div>
      </section>
      <section className="bg-white w-full h-auto flex flex-col lg:flex-row items-center my-12 py-12 lg:mt-28 px-5 md:px-14 lg:px-40 animate-fade-In">
        <div className="lg:w-[50%] h-full mb-12 lg:mb-0 flex items-center justify-center">
          <div className="flex items-center justify-center ml-6 lg:ml-0 lg:mt-10">
            <div className="relative border-4 border-[#f25d23] pb-6 lg:pb-12">
              <Image
                src={imageShippingOne}
                width={511}
                height={575}
                alt="KGRN Shipping Image"
                className="lg:-ml-12 lg:-mt-12 -mt-6 -ml-6 shadow-2xl"
              />
              <div className="bg-white z-10 h-[50%] lg:h-[40%] bottom-0 absolute w-full p-6 lg:p-10 gap-5 flex flex-col">
                <p className="font-medium text-gray-500 text-xs lg:text-base">
                  Lorem lacus reiciendis illo placerat tempus, temporibus
                  deserunt commodo incidunt error, unde. Facilisis aspernatur.
                  Recusandae illum
                </p>
                <div className="flex w-full gap-4">
                  <Image
                    src={icon1}
                    height={50}
                    width={50}
                    alt="Icon"
                    className="rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm text-gray-500 font-medium">
                      John Doe
                    </h4>
                    <p className="text-sm text-gray-500 font-light">
                      CEO At NY Water Park
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-1 flex-col justify-center items-center lg:items-start gap-6 lg:pl-8">
          <h2 className="text-sm lg:text-md font-semibold justify-center lg:justify-start text-center lg:text-start">
            Commercial Properties
          </h2>
          <h2 className="text-2xl lg:text-4xl font-semibold justify-center lg:justify-start text-center lg:text-start">
            NY Water Park
          </h2>
          <span className="before-content flex justify-center lg:justify-start"></span>
          <p className="text-gray-600 leading-relaxed text-center lg:text-start">
            You can use these sections to highlight the features of heading. Use
            these paragraphs to focus on the topic you want. Make sure you keep
            it short and attractive.
          </p>

          <div className="grid gap-4 mt-4">
            <h5 className="flex gap-2 items-center font-semibold text-sm hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Blandit fugit dicta quibusdam, maxime tempor
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-sm hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Blandit fugit dicta quibusdam, maxime tempor
            </h5>
            <h5 className="flex gap-2 items-center font-semibold text-sm hover:translate-x-2 transition-all duration-300">
              <span className="text-[#f25f23] text-xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </span>
              Blandit fugit dicta quibusdam, maxime tempor
            </h5>
          </div>
          <button className="bg-[#fe5a19] text-white hover:bg-black px-6 py-4 mt-5 rounded-sm font-medium flex items-center transition-all duration-300">
            Visit Project{" "}
            <span className="text-2xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
