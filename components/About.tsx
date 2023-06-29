import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Something about myself</h2>
          <p className="py-2 text-gray-600">
            My name is Ngoc Son and I’m 27 years old. For the past few years,
            I’ve been working as a system engineer for a Japanese automation
            company. However, I’ve always had a passion for web development.
            Recently, I decided to follow my heart and make a career change to
            pursue my dream of becoming a web developer.
          </p>
          <p className="py-2 text-gray-600">
            I have always been fascinated by the power of technology and the
            endless possibilities it offers. As a self-taught web developer, I
            am constantly learning and expanding my skills, driven by my desire
            to create innovative and impactful solutions.
          </p>
          <p className="py-2 text-gray-600">
            I am excited to embark on this new journey and am confident that my
            experience as a system engineer, combined with my determination and
            passion for web development, will enable me to succeed in this new
            field.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/laptop.jpg"
            width={500}
            height={500}
            alt="laptop"
            style={{ objectFit: "contain" }}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
