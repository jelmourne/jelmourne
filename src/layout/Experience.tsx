import EducationCard from "../components/EducationCard";
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
        <div className="flex flex-row items-center">
          <h1 className="text-white text-3xl text-center">
            <i className="fa-solid fa-graduation-cap"></i> Education
          </h1>
        </div>

        <div className="flex-row justify-center">
          <EducationCard
            school="Vanier College"
            degree="AEC"
            major="Software Development"
          ></EducationCard>
          <EducationCard
            school="Harvard University"
            degree="Certificate"
            major="Web Development"
          ></EducationCard>
          <EducationCard
            school="Harvard University"
            degree="Certificate"
            major="Computer Science"
          ></EducationCard>
          <EducationCard
            school="University of Ottawa"
            degree="BSc"
            major="Psychology"
          ></EducationCard>
          <EducationCard
            school="Vanier College"
            degree="DEC"
            major="Social Science"
          ></EducationCard>
        </div>
      </div>
    </div>
  );
}

export default Experience;
