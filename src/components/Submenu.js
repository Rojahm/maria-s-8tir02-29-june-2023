import React from "react";
import "./Submenu.css";

const Submenu = () => {
  return (
    <div className="Submenu">
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item">دسته بندی</button>
        </li>
        <li>
          <button className="dropdown-item">دسته</button>
        </li>
        <li>
          <button className="dropdown-item">بندی</button>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
