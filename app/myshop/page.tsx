import React from "react";
import Image from "next/image";
import project1img from "../../public/project1.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const Page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] z-10">
          <Image
            src={project1img}
            className="absolute z-1 object-cover brightness-[0.8]"
            alt="projectImg"
            fill={true}
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <div className="bg-[#ecf0f3]/90 inline-block p-4 rounded-xl text-center text-[#1f2937]">
              <h2 className="py-2">My shop</h2>
              <h3>ReactJs + Tailwind + Firebase</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3>Project</h3>
          <h2>Overview</h2>
          <p className="py-2 text-gray-800">
            This is an e-commerce website, built using the power of ReactJs and
            the elegance of Tailwind CSS. This website boasts a range of key
            features designed to enhance customer's shopping experience,
            including a dark mode with responsive design, user registration and
            authentication, the ability to modify cart items, view previous
            order history, search for items, and even a map with geolocation API
            and Leaflet library integration. All data is securely stored on
            Firebase, and our website is hosted on Firebase for optimal
            performance. Click the button below to view our demo.
          </p>
          <a
            href="https://reactjs-project-450f5.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">DEMO</button>
          </a>
          <a
            href="https://github.com/dngocson/ProjectReact-1"
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
                ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>
                Tailwind
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
