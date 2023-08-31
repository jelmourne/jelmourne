import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import "../index.css";

const developer = [
  "Engineered customized Python backends, tailoring website functionality to individual client needs.",
  "Crafted responsive websites for exceptional user experiences across devices.",
  "Developed scale able relational databases, optimizing data management efficiency.",
];

const dataEntry = [
  "Resolved potential damages in received goods through adept vendor communication.",
  " Skillfully managed invoice payments for shipments, resulting in a 95% accuracy rate.",
  "Utilized Excel for data analysis, applying V-lookup and Pivot Tables to enhance data readability.",
];

function Experience() {
  return (
    <div className="flex flex-row h-screen m-10" id="experience">
      <div className="flex flex-col justify-start">
        <h1 className="text-white text-3xl text-center">
          <i className="fa-solid fa-briefcase"></i> Experience
        </h1>
        <div>
          <ul className="steps steps-vertical">
            <li data-content="2023" className="step step-neutral">
              <ExperienceCard
                title="Freelace"
                position="Full Stack Developer"
                points={developer}
              ></ExperienceCard>
            </li>

            <li data-content="2021" className="step step-neutral">
              <ExperienceCard
                title="Linen Chest"
                position="Data Entry"
                points={dataEntry}
              ></ExperienceCard>
            </li>
            <li data-content="2020" className="step step-neutral">
              <ExperienceCard
                title="Linen Chest"
                position="Warehouse Associate"
              ></ExperienceCard>
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
