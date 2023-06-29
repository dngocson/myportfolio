import React from "react";
import Image from "next/image";
import project5img from "../../public/project5.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const Page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] z-10">
          <Image
            src={project5img}
            className="absolute z-1 object-cover brightness-[0.7]"
            alt="projectImg"
            fill={true}
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <div className="bg-[#ecf0f3]/95 inline-block p-4 rounded-xl text-center text-[#1f2937]">
              <h2 className="py-2">Carhub</h2>
              <h3>NextJs + Typescript + Tailwind</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3>Project</h3>
          <h2>Overview</h2>
          <p className="py-2 text-gray-800">
            CarHub is one of my study/clone projects. It showcases a list of car
            brands and their products, built with NextJs using TypeScript and
            Tailwind CSS. It features a responsive design that works on multiple
            screen sizes and is hosted on Vercel for optimal performance.
          </p>
          <a
            href="https://carshowcase-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">DEMO</button>
          </a>
          <a
            href="https://github.com/dngocson/carshow"
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
                NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>
                Tailwind
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
