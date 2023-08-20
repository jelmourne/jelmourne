import "../index.css";

function EducationCard(props: {
  school: string;
  degree: string;
  major: string;
}) {
  return (
    <div className="cursor-pointer bg-black/30 border-2 flex flex-col m-5 p-10 rounded-lg text-center border-tertiary/50 w-full hover:bg-tertiary/10 hover:scale-105 hover:shadow-[0px_7px_29px_0px_rgba(255, 153, 105,0.3)] transition-all">
      <h1 className="text-xl text-white">
        {props.school}, <span className="text-gray-400">{props.degree}</span>
      </h1>
      <h1>{props.major}</h1>
    </div>
  );
}

export default EducationCard;
