import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/sofiyullahj/"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/orpcy">
        <AiFillGithub size={18} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://stackoverflow.com/users/10930895/orpcy"
      >
        <FaStackOverflow size={18} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:sofiyullahj@gmail.com"
      >
        <AiOutlineMail size={18} />
      </a>
      <hr />
    </div>
  );
};

export default Socials;
