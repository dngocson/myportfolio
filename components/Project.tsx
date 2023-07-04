import React from "react";
import project1img from "../public/project1.png";
import project2img from "../public/project2.png";
import project3img from "../public/project3.png";
import project4img from "../public/project4.png";
import project5img from "../public/project5.png";
import pizzaCo from "../public/PizzaCo.png";
import ProjectItem from "./ProjectItem";
const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="My shop"
            backgroundImg={project1img}
            projectUrl="/myshop"
            subTitle="ReactJs + TailwindCss + Firebase"
          />

          <ProjectItem
            title="Carhub"
            backgroundImg={project5img}
            projectUrl="/carhub"
            subTitle="NextJs + TailwindCss + Typescript"
          />

          <ProjectItem
            title="My portfolio page"
            backgroundImg={project3img}
            projectUrl="/portfolio"
            subTitle="NextJs + TailwindCss + Typescript"
          />

          <ProjectItem
            title="The Pizza C.o"
            backgroundImg={pizzaCo}
            projectUrl="/pizzaCo"
            subTitle="Reactjs + TailwindCss + Typescript"
          />

          <ProjectItem
            title="Lucy PetCare"
            backgroundImg={project4img}
            projectUrl="/lucyPetcare"
            subTitle="ReactJs + Css"
          />
          <ProjectItem
            title="VietNam Travel"
            backgroundImg={project2img}
            projectUrl="/VNtravel"
            subTitle="Html + Css + JavaScript "
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
