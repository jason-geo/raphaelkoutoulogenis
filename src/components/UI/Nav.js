import React from "react";
import "../../App.css";

const Nav = ({ onLinkClick }) => {
  const links = [
    { id: 1, name: "Portfolio" },
    { id: 2, name: "About" },
    { id: 3, name: "Contact" },
  ];

  return (
    <nav className="nav">
      {links.map((link) => (
        <a
          key={link.id}
          href="#"
          onClick={() => {
            onLinkClick(link.id);
          }}
        >
          {link.name}
        </a>
      ))}
      <a key={4} target="_blank" href="https://blogspot.raphaelkoutoulogenis.com">Blog</a>
    </nav>
  );
};

export default Nav;
