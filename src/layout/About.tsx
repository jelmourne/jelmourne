import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "../index.css";

const textArr = [
  "Computer Scientist",
  "Web Developer",
  "Application Specialist",
];

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-row w-screen h-screen justify-between">
      <div className="w-1/2 text-white m-10">
        <h1 className="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-primary to-blue-400 bg-[length:300%_300%] animate-gradient">
          Justin Elmourne
        </h1>
        <div className="font-bold text-5xl text-gray-500">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              textArr.forEach((n) =>
                typewriter.typeString(n).pauseFor(1000).deleteAll().start()
              );
            }}
          ></Typewriter>
        </div>
        <p>
          Passionate about leveraging technology to drive
          <span> INNOVATION</span>, improve <span>EFFICIENCY</span>, and enhance
          user <span>EXPERIENCE</span>.
        </p>
        {expanded ? (
          <p>
            Seeking a challenging software development role where I can
            contribute my skills and expertise to develop cutting-edge
            solutions. Open to exciting opportunities to collaborate with
            dynamic teams and make a meaningful impact.
          </p>
        ) : (
          <button onClick={() => setExpanded(true)}>Show More</button>
        )}
      </div>
    </div>
  );
}

export default About;
