import React from "react";
import { introduction } from "@/contants";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Main = () => {
  const words = introduction.split(" ");
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Wellcome to my porfolio page
          </p>
          <h1 className="py-4 text-gray-700">
            My name is <span className="text-[#5651e5]">Ngoc Son</span>{" "}
          </h1>
          <h1 className="py-2 text-gray-700">A front-end web developer</h1>
          <div className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            {words.map((word, index) => (
              <span key={index}>
                <i
                  className={"text relative opacity-0 animate-fadeIn "}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}{" "}
                </i>
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
