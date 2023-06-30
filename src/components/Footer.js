import React from "react";
import "./Footer.css";
import Contact from "./Contact";
import logo from "../logo/hq-b.png";
import Support from "./Support";

const Footer = () => {
  return (
    <div className="Footer">
      <Support />
      <Contact />
      <div className="footer-content row mt-5 py-5">
        <div className="col">
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
        <div className="col">
          <h5>زیبا بمانید</h5>
          <p>
            مجموعه فروشگاه های روژا با بیش از 25 سال سابقه در ارائه محصولات با
            کيفيت ، مرغوب و با اصالت از برندهای معتبر جهانی مشغول به فعاليت است.
            هم اکنون فروشگاه اینترنتی روژا در ادامه اين رسالت و سابقه درخشان، به
            دنبال ارائه محصولات با کيفيت و اورجينال از برندهای معتبر خارجی و
            ايرانی در محيط آنلاين است. مشتريان می توانند از ميان هزاران محصول با
            کيفيت خارجی و داخلی آرایشی، بهداشتی و عطر ، محصول مورد نظر خود را
            جستجو ، بررسی و انتخاب نمايند. در فروشگاه اینترنتی روژا مشتريان عزیز
            می توانيد به راحتی، خرید اینترنتی لذت بخش، مطمئن و
          </p>
        </div>
        <div className="col">
          <img src={logo} alt="black logo" style={{ width: 100 }} />
          <h5 className="footer-title">اطلاعات تماس</h5>
          <ul>
            <li>
              <b>بخش اداری:</b>
              <p>
                تهران، بلوار ميرداماد، جنب دفينه، بازار بزرگ ميرداماد، ساختمان
                اداری، ط 4، واحد 412
              </p>
            </li>
            <li>
              <b>پست الکترونیکی:</b>
              <p>online@rojagroup.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <p>copyright 2023 MariaMaria - coded by Ro?a</p>
      </div>
    </div>
  );
};

export default Footer;
