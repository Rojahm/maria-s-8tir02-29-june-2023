import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartItem = () => {
  return (
    <div className="CartItem">
      <li className="Item">
        <div>
          <img
            src="https://images.rojashop.com/pr:sharp/rs:fill:0:600:0/plain/s3://uploads/products/40213/children/1687605763_fpcySN.jpg"
            width={100}
            alt="deodorant"
          />
        </div>
        <div>
          <p>استیک دئودورانت شیر و عسل دیپ سنس</p>
        </div>
        <div className="ItemNumber">
          <div className="ItemNumberAdd">
            <BiPlus />
          </div>
          <div>1</div>
          <div className="ItemNumberMinus">
            <BiMinus />
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
