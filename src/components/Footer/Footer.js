import React from 'react';
import './Footer.css'
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';


const Footer = () => {
  return (
    <div className="footer">
      <div className="scroll__top">
        <a href="#top">Back to top <VerticalAlignTopIcon/></a>
      </div>
      <div className="footer__container">
        <div className="footer__column">
          <ul>
            <li><strong>Careers</strong></li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Investor relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </ul>
        </div>
        <div className="footer__column">
          <ul>
          <li><strong>Make Money with Us</strong></li>
            <li>Sell Product on Amazon</li>
            <li>Sell app on Amozon </li>
            <li>Become an affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>See more Make More <br/>
            Money with Us</li>
          </ul>
        </div>
        <div className="footer__column">
          <ul>
            <li><strong>Amazon Payment Products</strong></li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer__column">
          <ul>
            <li><strong>Let Us Help You</strong></li>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & <br/>
            Politics</li>
            <li>Manage Your Content <br/>
            and Devices</li>
            <li>Amazon Assistant <br/>
            Help</li>
          </ul>
        </div>
      </div>
      
      <div className="footer__last">
        <small>Md Masud Rana || © 1996-{ new Date().getFullYear() }, Amazon.com, Inc. or its affiliates</small>
      </div>
    </div>
  );
};

export default Footer;