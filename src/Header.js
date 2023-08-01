import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <span className="logo">STONEHENGE</span>
        </a>
      </div>
      <button className="language-btn">ENG</button>
    </header>
  );
};

export default Header;
