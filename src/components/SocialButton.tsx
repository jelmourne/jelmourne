import "../index.css";

function SocialButton(props: { link: string; icon: React.ReactNode }) {
  return (
    <li
      className="bg-blue-300 w-10 aspect-square rounded-full flex justify-center items-center hover:cursor-pointer hover:scale-110 transition-all"
      onClick={() => {
        window.open(props.link);
      }}
    >
      <a>{props.icon}</a>
    </li>
  );
}

export default SocialButton;
