import React from "react";
import ProjectCard from "../components/ProjectCard";

const workly = ["CSS", "Flask", "HTML", "JavaScript", "SQL"];
const portfolio = ["CSS", "HTML", "React", "TypeScript", "Vite"];
const smartshop = ["CSS", "Django", "HTML", "JavaScript", "SQL"];

function Project() {
  return (
    <div className="flex flex-col h-max">
      <div className="flex flex-row justify-center m-10">
        <h1 className="text-white text-3xl">
          <i className="fa-solid fa-file"></i> Projects
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-28 flex-wrap">
        <ProjectCard
          title="Workly"
          tech={workly}
          link="https://github.com/jelmourne/workly"
        ></ProjectCard>
        <ProjectCard
          title="Portfolio"
          tech={portfolio}
          link="https://github.com/jelmourne/portfolio"
        ></ProjectCard>
        <ProjectCard
          title="Smartshop"
          tech={smartshop}
          link="https://github.com/jelmourne/smartshop"
        ></ProjectCard>
        <ProjectCard title="Smartshop" tech={smartshop} link=""></ProjectCard>
        <ProjectCard title="Smartshop" tech={smartshop} link=""></ProjectCard>
        <ProjectCard title="Smartshop" tech={smartshop} link=""></ProjectCard>
      </div>
      <div className="flex justify-end mx-32 m-10">
        <a
          className="text-[#eb3c71] hover:text-[#eb618a] hover:scale-105 transition-all"
          href="https://github.com/jelmourne?tab=repositories"
        >
          More Projects{" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
