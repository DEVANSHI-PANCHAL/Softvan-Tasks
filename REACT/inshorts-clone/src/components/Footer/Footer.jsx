import React from "react";
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{""}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Devanshi Panchal{" "}
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
    
        <a href="https://www.linkedin.com/in/devanshipanchal" target="__blank">
        <LinkedInIcon/>
        </a>

      </div>
    </div>
  );
};

export default Footer;
