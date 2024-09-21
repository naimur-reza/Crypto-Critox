import React from "react";
import logo from "../assets/icons/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      name: "Buy Crypto",
      link: "/buy-crypto",
    },
    {
      name: "Sell Crypto",
      link: "/sell-crypto",
    },
    {
      name: "Swap",
      link: "/swap",
    },
    {
      name: "Coin Market",
      link: "/coin-market",
    },
    {
      name: "Earn",
      link: "/earn",
    },
    {
      name: "Pages",
      link: "/pages",
    },
  ];

  return (
    <div className=" z-10 py-4 xxl:py-6 border-b border-gray-800 fixed top-0 left-0 right-0 w-full  bg-black">
      <div className="container flex items-center justify-between">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu">
          <ul className="hidden lg:flex items-center gap-4  font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-actions border border-blue-500 group  hover:border-white rounded-full ml-auto mr-2 lg:m-0 transition-all duration-500 p-0.5 w-fit ">
          <button className="btn-primary">Connect Wallet</button>
        </div>

        {/* mobile menu */}
        {/* Sidebar Button for Mobile */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed  top-0 left-0 h-full w-[250px] bg-gray-900 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <div className="navbar-logo">
              <img src={logo} alt="logo" />
            </div>
            <button
              onClick={toggleSidebar}
              className="text-white text-2xl focus:outline-none"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-3">
            {menuItems.map((item, index) => (
              <a key={index} href={item.link}>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
