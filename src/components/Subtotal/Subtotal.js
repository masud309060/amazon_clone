import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../State/StateProvider";
import { getBasketTotal } from "../../State/reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory()
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //part of the homework 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {
        user ? 
        <button onClick={() => history.push('/payment')}>Proceed to Checkout</button> :
        <button onClick={() => history.push('/login')}>Proceed to Checkout</button> 
      }
    </div>
  );
};

export default Subtotal;
