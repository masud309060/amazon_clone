import React, { useEffect, useState } from "react"
import './Orders.css'
import axios from '../../axios'
import Footer from "../Footer/Footer";
import Order from "../Order/Order";
import { useStateValue } from "../../State/StateProvider";


const Orders = () => {
  const [{user}, dispatch] = useStateValue()
  const [orderData, setOrderData] = useState([])
  console.log(orderData)

  useEffect(() => {
    if(user){
      axios.get(`/order/details?email=${user.email}`)
      .then(res => setOrderData(res.data))
    }
  },[]) 

  // const date = orderData?.created;
  // const d = new Date(date);
  // const ds = d.toLocaleString();
    
  return (
    <div className="orders">
      <h1>Your {orderData.length > 1? "Orders": "Order"} Card: </h1>

      {
        orderData && orderData.map((order, i) => <Order order={order} key={i} />)
      }

      <Footer /> 
    </div>
  );
};

export default Orders;