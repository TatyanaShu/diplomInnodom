import React from "react";
import Menu from "../Menu/Menu";
import Logo from "../Icons/Logo";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      Footer
      <Menu />
      <Link to="/" className="footel-logo">
        <Logo />
      </Link>
    </div>
  );
}

export default Footer;
