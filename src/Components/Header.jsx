import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link>WEB</Link>
        <Link>DESIGN</Link>
      </nav>
      <nav>
        <Link className="header-title">
          <img src="/img/logo3.png" alt="Sofiyullahi Jamiu" className="logo" />
        </Link>
      </nav>
      <nav>
        <Link>CONTACT</Link>
        <Link>RESUME</Link>
      </nav>
    </header>
  );
};

export default Header;
