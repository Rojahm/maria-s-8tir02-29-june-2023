import React from "react";
import "./Header.css";
import logo from "../logo/hq-w.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="row">
        <span className="col-md-2">
          <img src={logo} alt="logo black" style={{ width: 120 }} />
        </span>
        <span className="col-md-7">
          <form>
            <input className="form-control" type="text"></input>
          </form>
        </span>
        <span className="col-md-2">
          <button className="btn btn-light">sign in</button>
        </span>
        <span className="col-md-1">
          <button className="btn btn-light">cart</button>
        </span>
      </div>
    </div>
  );
};

export default Header;
