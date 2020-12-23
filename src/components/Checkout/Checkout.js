import React from 'react';
import { useStateValue } from '../../State/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'

const Checkout = () => {
  const [ {basket, user} ] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/HF/minions/Web-banner1.gif" alt="banner"/>  
        <div>
          <h3 className="checkout__user"> Hello, {user?.email} </h3>
          <h2 className="checkout__title">
            Your Shopping Basket 
          </h2>
        </div>

        <div className="checkout__product">
        {
        basket.map((item, index) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating} 
              key={index}
            />
          ))
        }
        </div>

      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;