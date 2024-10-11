import { useGSAP } from "@gsap/react";
import logo from "../../assets/icons/logo.png";
import { useState } from "react";
import gsap from "gsap";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../../constant/menuItems";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".navbar-logo", {
      delay: 0.3,
      opacity: 0,
      y: 30,
      duration: 0.7,
    });

    tl.from(".navbar-items li", {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });
  });

  useGSAP(() => {
    if (isOpen) {
      const tl = gsap.timeline();

      tl.from(".sidebar-logo", {
        opacity: 0,
        y: 30,
        duration: 0.7,
      });

      tl.from(".animate-link", {
        opacity: 0,
        y: -10,
        duration: 0.5,
        stagger: 0.2,
      });

      tl.from(".btn-animate", {
        opacity: 0,
      });
    }
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className=" z-10 py-4 xxl:py-6 border-b border-gray-800 fixed top-0 left-0 right-0 w-full  bg-black">
      <div className="container flex items-center justify-between">
        <div className="navbar-logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <ul className="hidden navbar-items lg:flex items-center gap-4  font-medium">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="btn-animate">
          <Link to={"/login"}>
            <Button>Connect Wallet</Button>
          </Link>
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
          className={`fixed  top-0 left-0 h-full w-[250px] bg-[#09131D] transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex  justify-between items-center p-4 border-b border-gray-700">
            <Link to="/" className="sidebar-logo">
              <img src={logo} alt="logo" className="w-24" />
            </Link>
            <div className="btn-animate">
              <button
                onClick={toggleSidebar}
                className="text-white text-2xl focus:outline-none"
              >
                &times;
              </button>
            </div>
          </div>
          <nav className="flex flex-col p-4 space-y-5">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="animate-link text-lg font-medium "
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
