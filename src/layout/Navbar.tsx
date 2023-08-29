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
        <NavButton name="About Me" link="#about"></NavButton>
        <NavButton name="Skills" link="#skill"></NavButton>
        <NavButton name="Project" link="#project"></NavButton>
        <NavButton name="Experience" link="#experience"></NavButton>
        <NavButton name="Contact" link="#contact"></NavButton>
      </ul>
      <ul className="flex flex-row gap-3 justify-end m-auto">
        <li>
          <a
            className="border-2 border-[rgb(100,149,237)] rounded-lg hover:shadow-[0px_7px_29px_0px_rgb(100,149,237)] shadow-[inset_0px_7px_29px_0px_rgb(100,149,237)] bg-slate-300 p-1 transition-all"
            href="public/JustinElmourne-CV.pdf"
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
