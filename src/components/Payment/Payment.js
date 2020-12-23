import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../State/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css'
import CurrencyFormat from "react-currency-format";
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'; 
import { getBasketTotal } from '../../State/reducer';
import axios from '../../axios';


const Payment = () => {
  const history = useHistory()
  const [{basket, user}, dispatch] = useStateValue()
  const stripe = useStripe()
  const elements = useElements()

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true) 
  const [clientSecret, setClientSecret] = useState(true) 


  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'POST',
        // stripe expects the total in a currencies subunits 
        url: `/payments/create?total=${(getBasketTotal(basket) * 100).toFixed()}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  },[basket])

  console.log('The secret is >>> ', clientSecret)

  const handleSubmit = async (event) => {
    // do all the fancy stripe struff ... 
    event.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {  // destructuring==> response 
      // paymentIntent = payment confirmation 

      const orderDetails = {email: user?.email,uid: user.uid, paymentIntentId: paymentIntent.id, basket: basket, amount: paymentIntent.amount, created: paymentIntent.created };

      axios({
        url: "/order/details",
        method: 'post',
        data: orderDetails
      }).then(res => {
        setSucceeded(true)
        setError(null)
        setProcessing(false)

        dispatch({
          type: 'EMPTY_BASKET'
        })

        history.replace('/orders')
      })
      .catch(error => alert(error)) // if any error happen in post order 

    })

  }

  const handleChange = event => {
    // listen for changes in the cardElement 
    // and display any errors as the customer types their card details 
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }


  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
            <Link to='/checkout'>{basket.length} items</Link>
          )
        </h1>

        {/* payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>House-16 React Lane</p>
            <p>Merul Badda, Dhaka-1212</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item , i)=> (
              <CheckoutProduct 
              id = {item.id} 
              title = {item.title} 
              price = {item.price} 
              rating = {item.rating} 
              image = {item.image} 
              key = {i}
              /> 
            ))}
          </div>

        </div>
        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__details">
              {/* Stripe magic will go */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} /> 
                <div className="payment__currencyContainer">
                  <CurrencyFormat 
                    renderText={(value) => (
                      <>
                        <h3>
                          Order Total: <strong>{value}</strong>
                        </h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />   
                  <button disabled={processing || disabled || succeeded} >
                    <span>{processing? <p>Processing</p> : 
                    "Buy Now"}</span> 
                  </button>
                </div>  

                {/* Error */}
                {error && <div>{error}</div>}
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;