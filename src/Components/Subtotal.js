import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button className="button float-right">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
