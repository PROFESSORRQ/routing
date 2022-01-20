import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {

    const navStyle={
        color:"white"
    };
  return (
    <nav>
      <h3>To-Do</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/deletedTask">
          <li>Deleted-Task</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
