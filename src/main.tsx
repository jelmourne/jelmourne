import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./layout/Navbar";
import About from "./layout/About";
import Skills from "./layout/Skills";
import Project from "./layout/Project";
import Experience from "./layout/Experience";
import Contact from "./layout/Contact";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <About></About>
    <Skills></Skills>
    <Project></Project>
    <Experience></Experience>
    <Contact></Contact>
  </React.StrictMode>
);
