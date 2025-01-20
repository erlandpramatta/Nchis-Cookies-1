import React, { useState, useEffect } from "react";
import logo from "../asset/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-lg shadow-lg" : "bg-amber-950/0 lg:bg-black"
      } p-1`}
    >
      <div className="flex lg:justify-between items-center">
        {/* Logo */}
        <div className="flex items-center lg:mx-20">
          <img src={logo} alt="logo" className="w-20 h-20 lg:h-28 lg:w-28" />
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex items-center ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <div className="flex flex-col lg:flex-row justify-center">
            <a
              href="#home"
              className={`text-white hover:text-yellow-400 mx-2 lg:mx-6 my-2 lg:my-0 lg:text-xl lg:font-semibold transition duration-300 ${
                isScrolled ? "text-yellow-700" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`text-white hover:text-yellow-400 mx-2 lg:mx-6 my-2 lg:my-0 lg:text-xl lg:font-semibold transition duration-300 ${
                isScrolled ? "text-yellow-700" : ""
              }`}
            >
              About
            </a>
            <a
              href="#product"
              className={`text-white hover:text-yellow-400 mx-2 lg:mx-6 my-2 lg:my-0 lg:text-xl lg:font-semibold transition duration-300 ${
                isScrolled ? "text-yellow-700" : ""
              }`}
            >
              Product
            </a>
            <a
              href="#contact"
              className={`text-white hover:text-yellow-400 mx-2 lg:mx-6 my-2 lg:my-0 lg:text-xl lg:font-semibold transition duration-300 ${
                isScrolled ? "text-yellow-700" : ""
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>

        <button
            className="bg-amber-800 border border-white lg:w-28 lg:h-10 w-20 h-8 flex justify-center items-center rounded-lg lg:mx-20 lg:ml-0 ml-56 text-white font-medium hover:bg-amber-700 transition duration-300 lg:mt-0"
            onClick={handleLogout}
        >
            <h2 className="text-center font-sans text-sm lg:text-md">Logout</h2>
        </button>


        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden ml-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
