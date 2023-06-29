import "./Menu.css";
import Header from "./Header";
import React from "react";
import Submenu from "./Submenu";
import {
  PiTrademarkLight,
  PiGiftLight,
  PiShootingStarThin,
  PiCoffeeDuotone,
} from "react-icons/pi";

const Menu = () => {
  return (
    <div className="Menu">
      <Header />
      <nav className="navbar navbar-expand-md">
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
                  دسته بندی محصولات
                </button>
                <Submenu />
              </li>
              <li class="nav-item">
                <button class="nav-link active" aria-current="page">
                  <PiTrademarkLight className="mx-1" />
                  برندها
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link">
                  <PiGiftLight className="mx-1" />
                  کارت هدیه
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link">
                  <PiCoffeeDuotone className="mx-1" />
                  وبلاگ
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link bold-txt">
                  <PiShootingStarThin className="mx-1" />
                  فروش ویژه
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
