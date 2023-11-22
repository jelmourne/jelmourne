import "../index.css";

function ExperienceCard(props: {
  title: string;
  position: string;
  points: string[];
}) {
  return (
    <div className="bg-black/30  w-[60vw] m-5 p-10 text-start rounded-lg">
      <h1 className="text-2xl text-white">
        <span className="bg-tertiary/50 text-orange-600 rounded-lg p-1">
          {props.position}
        </span>{" "}
        @ {props.title}
      </h1>
      <ul className="list-disc">
        {props.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
