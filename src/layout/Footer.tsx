import SocialButton from "../components/SocialButton";
import "../index.css";

function Footer() {
  return (
    <div className="bg-[rgb(100,149,237)] text-black z-[999] h-1/5">
      <ul className="flex flex-row gap-10 justify-center p-10">
        <SocialButton
          link="https://www.instagram.com/jus_elmourne3/?hl=en"
          icon={<i className="fa-brands fa-instagram"></i>}
        ></SocialButton>
        <SocialButton
          link="mailto:jelmourne@outlook.com"
          icon={<i className="fa-solid fa-envelope"></i>}
        ></SocialButton>
        <SocialButton
          link="https://www.linkedin.com/in/jelmourne/"
          icon={<i className="fa-brands fa-linkedin"></i>}
        ></SocialButton>
        <SocialButton
          link="https://github.com/jelmourne"
          icon={<i className="fa-brands fa-github"></i>}
        ></SocialButton>
      </ul>
      <h1 className="text-center pb-5"> &copy; 2023 | Justin Elmourne</h1>
    </div>
  );
}

export default Footer;
