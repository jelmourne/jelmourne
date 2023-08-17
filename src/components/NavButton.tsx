import React, { JSXElementConstructor, useState } from "react";
import "../index.css";

function NavButton(props: {
  ref?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  name: React.ReactNode;
}) {
  return (
    <li className="cursor-pointer m-2 p-1 rounded-xl hover:shadow-[inset_0px_7px_29px_0px_rgb(100,149,237),0px_7px_29px_0px_rgb(100,149,237)] hover:-translate-y-[1px] hover:bg-slate-300 transition-all">
      <a>{props.name}</a>
    </li>
  );
}

export default NavButton;
