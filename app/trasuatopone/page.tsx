import React from "react";
import Image from "next/image";
import trasua from "../../public/TraSuaTopONe.webp";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const Page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] z-10">
          <Image
            src={trasua}
            className="absolute z-1 object-cover brightness-[0.8]"
            alt="projectImg"
            fill={true}
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <div className="bg-[#ecf0f3]/90 inline-block p-4 rounded-xl text-center text-[#1f2937]">
              <h2 className="py-2">My shop</h2>
              <h3>ReactJs + Tailwind + Supabase</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3>Project</h3>
          <h2>Overview</h2>
          <p className="py-2 text-gray-800">
            This is the website of a milk tea cafeteria, built with ReactJs,
            Tailwind CSS, and Supabase database. It has features such as viewing
            the order list, changing the menu, and receiving email notifications
            when there is a new order for the admin. For customers, they can
            place orders and chat online with the website admin. The website has
            a responsive design that adapts to many screen sizes and uses
            Supabase database as its backend.
          </p>
          <a
            href="https://trasuatopone.online/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">DEMO</button>
          </a>
          <a
            href="https://github.com/dngocson/toponeCoffee"
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
                ReactJs / Redux
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
                React Query
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>{" "}
                React Hook Form
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>{" "}
                Supabase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <span>
                  <RiRadioButtonFill size={15} className="pr-1" />
                </span>
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
