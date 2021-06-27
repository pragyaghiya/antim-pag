import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout" style={{ marginTop: "4.2em" }}>
      <div className="checkout_left">
        <h2 className="checkout_title text-8xl">MyCart</h2>
      </div>
      <div
        style={{ width: "100%" }}
        className="d-flex flex-row justify-content-center align-items-center "
      >
        {/* <CartList /> */}
      </div>

      <div className="chekout_right">
        <Subtotal />
      </div>
      <div>table</div>
    </div>
  );
}

export default Checkout;
