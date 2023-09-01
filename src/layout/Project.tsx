import ProjectCard from "../components/ProjectCard";

const workly = ["CSS", "Flask", "HTML", "JavaScript", "SQL"];
const portfolio = ["CSS", "React", "TypeScript", "Vite"];
const smartshop = ["CSS", "Django", "HTML", "JavaScript", "SQL"];
const galleriem = ["CSS", "Flask", "React", "TypeScript", "SQL"];
const music = ["CSS", "React", "API", "TypeScript", "Vite"];
const game = ["C#", ".NET", "Unity"];

function Project() {
  return (
    <div className="flex flex-col h-max" id="#project">
      <div className="flex flex-row justify-center m-10">
        <h1 className="text-white text-3xl">
          <i className="fa-solid fa-file"></i> Projects
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-28 flex-wrap">
        <ProjectCard
          title="Workly"
          tech={workly}
          desc="Workly is a fullstack application designed to manage employee timesheets. Users can clock-in, clock-out, take breaks, and view their hours in a organized table."
          link="https://github.com/jelmourne/workly"
        ></ProjectCard>
        <ProjectCard
          title="Portfolio"
          tech={portfolio}
          desc="A single page frontend application to showcase my skills, achievements, and history as a programmer. This project is forever growing as my skills improve for the years to come."
          link="https://github.com/jelmourne/portfolio"
        ></ProjectCard>
        <ProjectCard
          title="Smartshop"
          tech={smartshop}
          desc="A ecommerce plaform where users can create buisnesses and manage their products. A place where customers can find anything they can imagine from software to appointments anything is possible."
          link="https://github.com/jelmourne/smartshop"
        ></ProjectCard>
        <ProjectCard
          title="Galleriem"
          tech={galleriem}
          desc="An art gallery website where the client can show off their art peices and sell their custom peices of art to their clients."
          link="https://github.com/jelmourne/system-development-project"
        ></ProjectCard>
        <ProjectCard
          title="Music"
          tech={music}
          desc="A music player designed for a chromium extention built on the Spotify API. Users can play, pause, skip, and save song right from their browser without navigating back and forth between tabs."
          link="https://github.com/jelmourne/musicplayer"
        ></ProjectCard>
        <ProjectCard
          title="Game"
          tech={game}
          desc="The game is a 2D platformer designed for the desktop. The game is a mix between horror, shooters, and platformers where uses can discover robust levels and challenging enemies."
          link="https://github.com/jelmourne/game"
        ></ProjectCard>
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
