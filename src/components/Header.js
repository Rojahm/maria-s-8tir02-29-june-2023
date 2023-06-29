import React from "react";
import "./Header.css";
import logo from "../logo/hq-w.png";
import Search from "./Search";
import Cart from "./Cart";
import SignIn from "./SignIn";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="Header">
      <div className="row">
        <span className="col-md-3">
          <img src={logo} alt="logo black" style={{ width: 120 }} />
        </span>
        <span className="search col-md-6">
          <form class="input-group">
            <input
              className="form-control"
              type="text"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
              placeholder="جستجو نام محصول، کد و..."
            ></input>
          </form>
          <Search />
        </span>
        <span className="dashboard col-md-2">
          <button
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            ورود/عضویت
          </button>
          <SignIn />
        </span>
        <span className="dashboard col-md-1">
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasLeft"
            aria-controls="offcanvasLeft"
          >
            <FiShoppingCart />
          </button>
          <Cart />
        </span>
      </div>
    </div>
  );
};

export default Header;
