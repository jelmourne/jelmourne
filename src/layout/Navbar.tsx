import "../index.css";
import { useRef } from "react";
import NavButton from "../components/NavButton";
import Contact from "./Contact";

function Navbar() {
  const handleScroll = (elem: any) => {
    const id = document.getElementById(elem);
    window.scrollTo({
      top: id?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <nav className="bg-black flex text-white gap-3 w-full justify-center lg:gap-10 text-2xl z-[999] backdrop-blur-2xl">
      <ul className="flex flex-row gap-3 justify-start m-auto">
        <NavButton
          name={<i className="fab fa-github"></i>}
          onClick={() => window.open("https://github.com/jelmourne")}
        ></NavButton>
        <NavButton
          name={<i className="fa-brands fa-linkedin"></i>}
          onClick={() => window.open("https://www.linkedin.com/in/jelmourne/")}
        ></NavButton>
      </ul>
      <ul className="flex flex-row gap-4 justify-center m-auto ">
        <NavButton
          name="About Me"
          onClick={() => {
            handleScroll("#about");
          }}
        ></NavButton>
        <NavButton
          name="Skills"
          onClick={() => {
            handleScroll("#skills");
          }}
        ></NavButton>
        <NavButton
          name="Project"
          onClick={() => {
            handleScroll("#project");
          }}
        ></NavButton>
        <NavButton
          name="Experience"
          onClick={() => {
            handleScroll("#experience");
          }}
        ></NavButton>
        <NavButton
          name="Contact"
          onClick={() => {
            handleScroll("#contact");
          }}
        ></NavButton>
      </ul>
      <ul className="flex flex-row gap-3 justify-end m-auto">
        <li>
          <a
            className="border-2 border-[rgb(100,149,237)] rounded-lg hover:shadow-[0px_7px_29px_0px_rgb(100,149,237)] shadow-[inset_0px_7px_29px_0px_rgb(100,149,237)] bg-slate-300 p-1 transition-all"
            href="/JustinElmourne-CV.pdf"
            download
          >
            <i className="fa-regular fa-circle-down"></i> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
