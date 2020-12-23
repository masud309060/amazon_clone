import React from 'react';
import './Order.css'
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../State/reducer";

const Order = ({order}) => {
  return (
    <div className="order">
      <div className="order__userInfo">
        <div className="order__time">
          <h3>Order:</h3>
          <p>
            {
              (new Date(order?.created)).toLocaleString()
            }
          </p>
        </div>
        <div className="order__id">
          <h3>Payment Id:</h3>
          <p>
            {order.paymentIntentId}
          </p>
        </div>
      </div>

      <div className="order__product">
      {
        order && order.basket && order.basket.map((item, i) => (
          <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} 
                key={i}
              />
        ))
      }
      </div>

      <div className="order__total">
      <CurrencyFormat 
                    renderText={(value) => (
                      <>
                        <h3>
                          Order Total: <strong>{value}</strong>
                        </h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(order?.basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />  
      </div>
    </div>
  );
};

export default Order;