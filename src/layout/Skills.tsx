import { useState } from "react";
import "../index.css";
import SmallCard from "../components/SmallCard";

function Skills() {
  return (
    <div className="flex justify-center" id="#skills">
      <div className="flex flex-col bg-zinc-950 rounded-2xl w-11/12 h-fit p-5 -mt-40">
        <div className="flex flex-row justify-center m-10">
          <h1 className="text-white text-3xl">
            <i className="fa-solid fa-bolt"></i> Skills
          </h1>
        </div>
        <div className="flex justify-center m-5">
          <p className="text-center p-3 text-lg w-3/4 text-gray-400">
            As a self-employed Full Stack Developer, I've cultivated a versatile
            skill set spanning front-end and back-end development. Proficient in
            Object-Oriented Programming, data structures, and algorithms, I
            craft efficient solutions. Utilizing APIs, I seamlessly integrate
            software components. In web development, I design responsive user
            interfaces using HTML, CSS, and Bootstrap. Mastery of Python, Java,
            JavaScript, and SQL empowers me to create dynamic applications with
            robust databases. Beyond technical skills, I exhibit leadership and
            coordination abilities from roles as a Warehouse Associate and Data
            Entry Clerk. Endorsements in Git highlight my commitment to staying
            current. My journey reflects technical prowess, creativity in web
            development, and essential soft skills for successful project
            execution.
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
  );
}

export default Skills;
