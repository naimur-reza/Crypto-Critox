import React from "react";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  return (
    <div className=" z-10 py-4 xxl:py-6 border-b border-gray-800 fixed top-0 left-0 right-0 w-full  bg-black">
      <div className="container flex items-center justify-between">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu">
          <ul className="flex items-center gap-4  font-medium">
            <li>Buy Crypto</li>
            <li>Sell Crypto</li>
            <li>Swap</li>
            <li>Coin Market</li>
            <li>Earn</li>
            <li className="relative group">
              <button className="lg:text-lg py-2 inline-flex items-center gap-1 submenu-btn">
                Pages
              </button>
              <ul className="absolute hidden group-hover:block bg-black p-10 left-0 top-full ">
                <li>Pages</li>
                <li>Pages</li>
                <li>Pages</li>
                <li>Pages</li>
                <li>Pages</li>
                <li>Pages</li>
                <li>Pages</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-actions border border-blue-500 group  hover:border-white rounded-full transition-all duration-500 p-0.5 w-fit ">
          <button className="btn-primary">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
