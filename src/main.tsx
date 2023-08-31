import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./layout/Navbar";
import About from "./layout/About";
import Skills from "./layout/Skills";
import Project from "./layout/Project";
import Experience from "./layout/Experience";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <Parallax pages={4.5}>
      <Navbar></Navbar>
      <About></About>
      <ParallaxLayer offset={0.99} speed={1}>
        <Skills></Skills>
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.3} factor={2}>
        <Project></Project>
      </ParallaxLayer>
      <ParallaxLayer offset={2.5}>
        <Experience></Experience>
      </ParallaxLayer>
      <ParallaxLayer offset={3.4}>
        <Contact></Contact>
      </ParallaxLayer>
      <ParallaxLayer offset={4.3}>
        <Footer></Footer>
      </ParallaxLayer>
    </Parallax>
  </React.StrictMode>
);
