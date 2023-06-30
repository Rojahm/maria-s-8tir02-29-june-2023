import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="Cart">
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeftLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            سبد خرید
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <ul className="cartList">
              <CartItem />
              <CartItem />
              <CartItem />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
