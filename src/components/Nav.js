import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import winc from "../images/winc.png";

function Nav() {
  const navStyle = {
    color: "white",
    padding: "20px",
    textDecoration: "none",
  };

  const studenten = useSelector((state) => state.studenten);

  return (
    <nav>
      <Link style={navStyle} to="/">
          <img src={winc} width="60" alt="logo" className="logo" />
        </Link>
      <ul className="nav-links">
          {studenten.map((student, index) => (
          <Link key={index} style={navStyle} to={`/${student.studentNaam}`}>
            <li>{student.studentNaam}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
