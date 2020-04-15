import React from "react";

function Nav() {
  return (
    <div className="header">
      <ul className="nav">
        <li className="nav-item">
          <h1 className="name"> Google Book</h1>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../pages/search">
            Search
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../pages/saved">
            Saved
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
