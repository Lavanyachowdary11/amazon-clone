import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout"
import Login from './Login'
import Payment from './Payment'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise= loadStripe('pk_test_51HhBVPG0RMimpsXzQ0azHzjfdfPl2xHGeSPfEsbvFEmVarSO0zydyJMGQWpyiAEYcWgOGpoo9rijTFPLsAqlx2uZ006Dq4N9G0');

function App() {
  const [{},dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM  convention
    <Router>
      <div className="app"> 
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Checkout">
            <Header /> 
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Header /> 
            <Elements stripe={promise}>
                <Payment />
            </Elements>
          </Route>
          <Route path="/Orders">
            <Header /> 
            <Orders/>
          </Route>
          <Route path="/">
            <Header /> 
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
