import { useState } from "react";
import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartItem = () => {
  const [itemNum, SetItemNum] = useState(0);

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
          <p>۶۳,۹۲۰ تومان</p>
        </div>
        <div className="ItemNumber">
          <div
            className="ItemNumberAdd"
            onClick={() => SetItemNum(itemNum + 1)}
          >
            <BiPlus />
          </div>
          <div>{itemNum}</div>
          <div
            className="ItemNumberMinus"
            onClick={() =>
              itemNum !== 0 ? SetItemNum(itemNum - 1) : SetItemNum(0)
            }
          >
            <BiMinus />
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
