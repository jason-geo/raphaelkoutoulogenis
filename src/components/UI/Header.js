import "../../App.css";
import logo from "../../assets/raphael-koutoulogenis-logo-cropped.png";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = ({ onLinkClick }) => {

  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="nav-container">
        <Nav onLinkClick={onLinkClick}/>
        <div className="icons-container">
          <FontAwesomeIcon icon={faCoffee} className="icons" />
          <FontAwesomeIcon icon={faCoffee} className="icons" />
          <FontAwesomeIcon icon={faCoffee} className="icons" />
        </div>
      </div>
    </header>
  );
};

export default Header;
