import { useState } from "react";
import "../index.css";
import NavButton from "../components/NavButton";

function Navbar() {
  return (
    <nav className="bg-black flex text-white gap-3 w-full justify-center lg:gap-10 text-2xl  backdrop-blur-2xl">
      <ul className="flex flex-row gap-3 justify-start m-auto">
        <NavButton
          name={<i className="fab fa-github"></i>}
          link="https://github.com/jelmourne"
        ></NavButton>
        <NavButton
          name={<i className="fa-brands fa-linkedin"></i>}
          link="https://www.linkedin.com/in/jelmourne/"
        ></NavButton>
      </ul>
      <ul className="flex flex-row gap-4 justify-center m-auto">
        <NavButton name="About Me"></NavButton>
        <NavButton name="Skills"></NavButton>
        <NavButton name="Project"></NavButton>
        <NavButton name="Experience"></NavButton>
        <NavButton name="Contact"></NavButton>
      </ul>
      <ul className="flex flex-row gap-3 justify-end m-auto">
        <li>
          <i className="fa-regular fa-circle-down"></i> Resume
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
