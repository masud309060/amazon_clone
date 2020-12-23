import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../State/StateProvider';
import { auth } from '../../firebase';

const Header = () => {
  const [state] = useStateValue();

  const handleAuthentication = () => {
    if (state.user) {
      auth.signOut()
    }
  }

  return (
    <div className="header" id="header">
      <Link to="/">
        <img className="header__logo" src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt="amozon-logo"/>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"/>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
        <Link to={ !state.user && "/login" }>
          <div className="header__option">
            <span className="header__optionLine1">
              Hello, {!state?.user ? 'Guest': state.user?.email} 
            </span>
            <span onClick={handleAuthentication} className="header__optionLine2">
              { state.user? "Sign out": "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLine1">
              Returns, 
            </span>
            <span className="header__optionLine2">
              & Orders 
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLine1">
            Your, 
          </span>
          <span className="header__optionLine2">
            Prime 
          </span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon /> 
            <span className="header__optionLine2 header__basketCount">{state.basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;