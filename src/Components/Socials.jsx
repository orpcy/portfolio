import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

const Socials = () => {
  return (
    <div>
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
        <a target="_blank" rel="noreferrer" href="mailto:sofiyullahj@gmail.com">
          <AiOutlineMail size={18} />
        </a>
        <hr />
      </div>
      <div className="codementor">
        <a
          href="https://www.codementor.io/@sofiyullahj?refer=badge"
          target="_blank"
        >
          <img
            src="https://www.codementor.io/m-badges/sofiyullahj/find-me-on-cm-b.svg"
            alt="Codementor badge"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
