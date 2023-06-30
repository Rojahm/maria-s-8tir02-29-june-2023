import React from "react";
import "./Support.css";
import { BsPatchCheckFill, BsHeadset } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { IconContext } from "react-icons";
const Support = () => {
  return (
    <div className="Support">
      <div className="row">
        <div className="col-sm support-item">
          <div className="row">
            <div className="col-md support-icon">
              <IconContext.Provider value={{ size: "3.5em" }}>
                <BsPatchCheckFill />
              </IconContext.Provider>
            </div>
            <div className="col-md support-text">
              <p>
                <b>ضمانت اصالت کالا</b>
              </p>
              <p>ارائه تضمین اصل بودن کالا</p>
            </div>
          </div>
        </div>
        <div className="col-sm support-item">
          <div className="row">
            <div className="col-md support-icon">
              <IconContext.Provider value={{ size: "3.5em" }}>
                <FaMotorcycle />
              </IconContext.Provider>
            </div>
            <div className="col-md support-text">
              <p>
                <b>ارسال رایگان بالای ۵۰۰,۰۰۰ تومان</b>
              </p>
              <p>برای سراسر کشور</p>
            </div>
          </div>
        </div>
        <div className="col-sm support-item">
          <div className="row">
            <div className="col-md support-icon">
              <IconContext.Provider value={{ size: "3.5em" }}>
                <TbTruckReturn />
              </IconContext.Provider>
            </div>
            <div className="col-md support-text">
              <p>
                <b>بازگشت کالا</b>
              </p>
              <p>ضمانت بازگشت کالا تا 7 روز</p>
            </div>
          </div>
        </div>
        <div className="col-sm support-item">
          <div className="row">
            <div className="col-md support-icon">
              <IconContext.Provider value={{ size: "3.5em" }}>
                <BsHeadset />
              </IconContext.Provider>
            </div>
            <div className="col-md support-text">
              <p>
                <b>مشاوره</b>
              </p>
              <p>مشاوره پوست و زیبایی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
