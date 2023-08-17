import ExperienceCard from "../components/ExperienceCard";
import "../index.css";

function Experience() {
  return (
    <div className="flex flex-row h-screen m-10">
      <div className="flex flex-col justify-start">
        <h1 className="text-white text-3xl text-center">
          <i className="fa-solid fa-briefcase"></i> Experience
        </h1>
        <div>
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
      <div className="flex flex-col">
        <h1 className="text-white text-3xl text-center">
          <i className="fa-solid fa-graduation-cap"></i> Education
        </h1>
      </div>
    </div>
  );
}

export default Experience;
