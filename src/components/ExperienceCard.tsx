import "../index.css";

function ExperienceCard(props: {
  title: string;
  position: string;
  point: string[];
}) {
  return (
    <div className="bg-black w-[60vw] m-5 p-10 text-start">
      <h1 className="text-2xl text-white">
        <span className="bg-tertiary/50 text-orange-600 rounded-lg p-1">
          Developer
        </span>{" "}
        @ Apple
      </h1>
      <ul className="list-disc">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </li>
      </ul>
    </div>
  );
}

export default ExperienceCard;