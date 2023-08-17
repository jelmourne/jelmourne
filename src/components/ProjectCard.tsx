import React from "react";
import ProjectButton from "./ProjectButton";

function ProjectCard(props: { title: string; tech: string[] }) {
  return (
    <div className="flex flex-col rounded-xl gap-10 justify-center p-10 cursor-pointer w-1/4 aspect-video hover:shadow-[0px_7px_29px_0px_rgba(103,2,61,0.3)] hover:bg-[#9A54B317] transition-all">
      <h1 className="text-3xl text-center font-bold">{props.title}</h1>
      <p className="text-gray-500 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nis.
      </p>
      <div>
        <ul className="flex justify-center flex-row gap-4 flex-wrap">
          {props.tech.map((item) => {
            return <ProjectButton name={item}></ProjectButton>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
