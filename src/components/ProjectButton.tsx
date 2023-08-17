import "../index.css";

function ProjectButton(props: { name: string }) {
  return (
    <li className="w-fit rounded-2xl px-3 bg-[#ad3a8a5b] text-[#eb3c71] text-sm">
      {props.name}
    </li>
  );
}

export default ProjectButton;
