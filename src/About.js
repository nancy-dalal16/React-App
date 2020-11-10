import React from "react";
import { NavLink } from "react-router-dom";
import about from "../src/Images/about.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name=" Welcome to About Page "
        imgsrc={about}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
