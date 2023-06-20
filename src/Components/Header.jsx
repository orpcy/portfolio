import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuOpen = () => setMenuToggle(true);
  const handleMenuClose = () => setMenuToggle(false);

  const downloadResume = () => {
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
        });
      });
    }
  };

  return (
    <React.Fragment>
      <header className="header_desktop">
        <nav>
          <Link>WEB</Link>
          <Link>DESIGN</Link>
        </nav>
        <nav>
          <Link className="header-title">
            <img
              src="/img/logo3.png"
              alt="Sofiyullahi Jamiu"
              className="logo"
            />
          </Link>
        </nav>
        <nav>
          <Link>CONTACT</Link>
          <Link onClick={downloadResume}>RESUME</Link>
        </nav>
      </header>

      <header className="header_mobile">
        <nav>
          <Link className="header-title">
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
        <nav>
          <Link>WEB</Link>
          <Link>DESIGN</Link>
          <Link>CONTACT</Link>
          <Link>RESUME</Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
