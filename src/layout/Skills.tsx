import { useState } from "react";
import "../index.css";
import SmallCard from "../components/SmallCard";

function Skills() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col bg-zinc-800 rounded-2xl w-11/12 h-fit p-5 -mt-40">
          <div className="flex flex-row justify-center m-10">
            <h1 className="text-white text-3xl">
              <i className="fa-solid fa-bolt"></i> Skills
            </h1>
          </div>
          <div className="flex justify-center m-5">
            <p className="text-center p-3 text-lg w-3/4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex justify-center m-5 flex-wrap">
            <SmallCard title="CSS" logo="css" value="85"></SmallCard>
            <SmallCard title="Database" logo="sql" value="80"></SmallCard>
            <SmallCard title="HTML" logo="html" value="90"></SmallCard>
            <SmallCard title="Java" logo="java" value="70"></SmallCard>
            <SmallCard title="JavaScript" logo="js" value="55"></SmallCard>
            <SmallCard title="Python" logo="python" value="75"></SmallCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
