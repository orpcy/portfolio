import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <FaLinkedinIn />
      <AiFillGithub />
      <FaStackOverflow />
      <hr />
    </div>
  );
};

export default Socials;
