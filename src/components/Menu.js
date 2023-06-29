import "./Menu.css";
import Header from "./Header";
import React from "react";
import Submenu from "./Submenu";

const Menu = () => {
  return (
    <div className="Menu">
      <Header />
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </button>
                <Submenu />
              </li>
              <li class="nav-item">
                <button class="nav-link active" aria-current="page">
                  Home
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link">Features</button>
              </li>
              <li class="nav-item">
                <button class="nav-link">Pricing</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
