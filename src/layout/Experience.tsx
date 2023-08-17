import ExperienceCard from "../components/ExperienceCard";
import "../index.css";

function Experience() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-center m-10">
        <h1 className="text-white text-3xl">
          <i className="fa-solid fa-briefcase"></i> Experience
        </h1>
      </div>
      <div className="flex flex-row justify-start m-10">
        <ul className="steps steps-vertical">
          <li data-content="2023" className="step step-neutral">
            <ExperienceCard></ExperienceCard>
          </li>
          <li data-content="2022" className="step step-neutral">
            <ExperienceCard></ExperienceCard>
          </li>
          <li data-content="2021" className="step step-neutral">
            <ExperienceCard></ExperienceCard>
          </li>
          <li data-content="2020" className="step step-neutral">
            <ExperienceCard></ExperienceCard>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
