import React from "react";
import "./Footer.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="Footer">
      <Contact />

      <div className="row">
        <div className="col">col 1</div>
        <div className="col">col 2</div>
        <div className="col">col 3</div>
      </div>
      <div className="credits">
        <p>copyright 2023 MariaMaria - coded by Ro?a</p>
      </div>
    </div>
  );
};

export default Footer;
