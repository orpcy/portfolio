import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const handleMenuOpen = (): void => setMenuToggle(true);
  const handleMenuClose = (): void => setMenuToggle(false);

  const downloadResume = (): void => {
    if (window.confirm("Download SofiyullahJ Resume?")) {
      // using Java Script method to get PDF file
      fetch("/img/Resume.pdf").then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "SofiyullahJ Resume.pdf";
          alink.click();
          handleMenuClose();
        });
      });
    }
  };

  return (
    <React.Fragment>
      <header className="header_desktop">
        <nav className="line">
          <a href="#web_projects">WEB</a>
          <a href="#design_projects">DESIGN</a>
        </nav>
        <nav>
          <Link to="/" className="header-title">
            <img
              src="/img/logo3.png"
              alt="Sofiyullahi Jamiu"
              className="logo"
            />
          </Link>
        </nav>
        <nav className="line">
          <a href="#contact">CONTACT</a>
          <Link to="/" onClick={downloadResume}>RESUME</Link>
        </nav>
      </header>

      <header className="header_mobile">
        <nav>
          <Link to="/" className="header-title">
            <img
              src="/img/logo3.png"
              alt="Sofiyullahi Jamiu"
              className="logo"
            />
          </Link>
        </nav>
        <nav>
          <AiOutlineMenuUnfold size={28} onClick={handleMenuOpen} />
        </nav>
      </header>

      <div className={`mobile-menu ${menuToggle ? "opened" : ""}`}>
        <div className="close">
          <AiOutlineCloseSquare size={28} onClick={handleMenuClose} />
        </div>
        <nav className="line">
          <a onClick={handleMenuClose} href="#web_projects">
            WEB
          </a>
          <a onClick={handleMenuClose} href="#design_projects">
            DESIGN
          </a>
          <a onClick={handleMenuClose} href="#contact">
            CONTACT
          </a>
          <Link to="/" onClick={downloadResume}>RESUME</Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
