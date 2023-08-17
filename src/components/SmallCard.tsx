import { useState } from "react";
import "../index.css";

function SmallCard(props: { title: string; logo: string; value: string }) {
  console.log(props.value);
  return (
    <div className="flex flex-col justify-center items-center h-48 hover:scale-105 transition-transform aspect-square m-5">
      <div
        className="radial-progress text-cyan-500 animate-textcolor"
        style={{
          "--value": props.value,
          "--size": "12rem",
          "--thickness": "12px",
        }}
      >
        <img className="p-12" src={"src/assets/" + props.logo + ".svg"}></img>
      </div>
      <h1 className="p-3">{props.title}</h1>
    </div>
  );
}

export default SmallCard;
