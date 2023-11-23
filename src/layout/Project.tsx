import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import axios, { AxiosResponse } from "axios";

export async function getRepos() {
  const response = await axios.get(
    "https://api.github.com/users/jelmourne/starred"
  );
  return response;
}

function Project() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function callData() {
      setData(await getRepos());
    }
    callData();
  }, []);
  return (
    <div className="flex flex-col h-max" id="#project">
      <div className="flex flex-row justify-center m-10">
        <h1 className="text-white text-3xl">
          <i className="fa-solid fa-file"></i> Projects
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-28 flex-wrap">
        {data &&
          data.data.map((elem: any) => {
            return (
              <ProjectCard
                key={elem.id}
                title={elem.name}
                desc={elem.description}
                tech={elem.topics}
                link={elem.html_url}
              ></ProjectCard>
            );
          })}
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
