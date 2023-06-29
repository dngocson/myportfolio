import React from "react";
import Image from "next/image";
import project2img from "../../public/project2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const Page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] z-10">
          <Image
            src={project2img}
            className="absolute z-1 object-cover brightness-[0.8]"
            alt="projectImg"
            fill={true}
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <div className="bg-[#ecf0f3]/95 inline-block p-4 rounded-xl text-[#1f2937] text-center">
              <h2 className="py-2">VietNam Travel</h2>
              <h3>Html + Css + Javascript</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3>Project</h3>
          <h2>Overview</h2>
          <p className="py-2 text-gray-800">
            Welcome to Vietnam Travel, this website is a landing page for a
            travel agency and it is built with the power of HTML, CSS, and
            JavaScript, and features a responsive design that looks great on any
            device. It also have a carousel and picture cards to display all
            stunning destinations, you also can use our map with geolocation API
            and Leaflet library integration to find the closest office. is
            hosted on Firebase for optimal performance.
          </p>
          <a
            href="https://react-41f63.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">DEMO</button>
          </a>
          <a
            href="https://github.com/dngocson/ProjectHTML"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">CODE</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>
                Html
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>
                Css
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>{" "}
                Leaflet library
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
