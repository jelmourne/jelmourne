import { useEffect, useRef, useState } from "react";
import "../index.css";
import axios from "axios";

export async function sendMessage(
  first: string,
  last: string,
  email: string,
  message: string
) {
  await axios
    .post("https://formsubmit.co/jelmourne@outlook.com", {
      name: first + " " + last,
      email: email,
      message: message,
    })
    .then((e: any) => {
      return e;
    });
}

function Contact() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-zinc-950 mt-20 rounded-t-3xl" id="#contact">
      <div className="flex flex-row justify-center p-10">
        <h1 className="text-white text-3xl">
          <i className="fa-solid fa-phone"></i> Contact
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-10 p-10">
        <div className="order-1 mx-10 flex flex-col items-center">
          <h1 className="text-4xl m-4 border-b-2 text-center">Reach me</h1>
          <h1 className="text-5xl text-white m-3 font-bold">
            jelmourne@outlook.com
          </h1>
          <img
            className="mt-10 rounded-full object-contain aspect-square w-1/2"
            src="/portfolio/avatar.png"
          ></img>
        </div>
        <div className="flex flex-col gap-4 order-2 w-screen" id="form">
          <div className="flex flex-row gap-2 justify-center">
            <input
              type="text"
              onChange={(elem) => setFirst(elem.target.value)}
              className=" w-1/2 p-3 rounded-lg border-2 bg-transparent focus:outline-none focus:border-2 focus:border-blue-400 transition-all"
              placeholder="First Name"
            ></input>
            <input
              type="text"
              onChange={(elem) => setLast(elem.target.value)}
              className="w-1/2 p-3 rounded-lg border-2 bg-transparent focus:outline-none focus:border-2 focus:border-blue-400 transition-all"
              placeholder="Last Name"
            ></input>
          </div>

          <input
            type="email"
            onChange={(elem) => setEmail(elem.target.value)}
            className="p-3 rounded-lg border-2 bg-transparent focus:outline-none focus:border-2 focus:border-blue-400 transition-all"
            placeholder="Email"
          ></input>

          <textarea
            id="message"
            onChange={(elem) => setMessage(elem.target.value)}
            className="p-3 rounded-lg h-1/2 border-2 bg-transparent resize-none focus:outline-none focus:border-2 focus:border-blue-400 transition-all"
          ></textarea>
          <button
            onClick={async () => {
              await sendMessage(first, last, email, message);
              location.reload();
            }}
            className="text-start text-black w-fit bg-blue-400 hover:cursor-pointer p-2 px-10 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
