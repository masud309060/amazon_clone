import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./State/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from "./components/Orders/Orders";

function App() {
  const [ {basket }, dispatch] = useStateValue();
  const stripePromise = loadStripe('pk_test_51HZypyFHPqyfRp1fbDtjgiAQsB8fJ5ocEWr48F33HUuuUR2mUmTGvBZjL4bplTkTYxkloah761FhkhmmUCYzTKTC00gLEgYqU6');

  useEffect(() => {
    // will only run once when the app component loads... 

    auth.onAuthStateChanged(authUser => {
      // console.log('The USER IS', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in 

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged in 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
      
    })
  } ,[])
  return (
    <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders /> 
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout /> 
            <Footer /> 
          </Route> 

          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
              <Payment /> 
            </Elements>
          </Route>
          
          <Route path="/">
            <Header />
            <Home />
            <Footer /> 
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
