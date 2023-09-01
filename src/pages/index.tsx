import React, { useRef } from "react";

import Navbar from "../layout/Navbar";
import About from "../layout/About";
import Skills from "../layout/Skills";
import Project from "../layout/Project";
import Experience from "../layout/Experience";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

function Index() {
  const about = useRef();
  const skills = useRef();
  const project = useRef();
  const experience = useRef();
  const contact = useRef();
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Index;
