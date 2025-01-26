import React, { useState, useEffect } from "react";
import logo from "../asset/logo.png";
import google from "../asset/google.png";
import { auth, provider, signInWithPopup } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useUser } from "./userContext"; // Import context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setUser } = useUser(); // Access context
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); // Set user in context
      alert(`Welcome, ${user.displayName}`);
      navigate("/home");
    } catch (error) {
      console.error("Error during login:", error.message);
      alert(`Login failed: ${error.message}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

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
      {/* Content */}
      <div className="flex lg:justify-between items-center">
        <div className="flex items-center lg:mx-20">
          <img src={logo} alt="logo" className="w-20 h-20 lg:h-28 lg:w-28" />
        </div>

        <div
          className={`lg:flex items-center ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row justify-center">
            <a href="#home" className="text-white hover:text-yellow-400 mx-2 lg:mx-6 my-2 lg:my-0 lg:text-xl lg:font-semibold transition duration-300">
              Home
            </a>
            <a href="#about" className="text-white hover:text-yellow-400 mx-2 lg:mx-6 my-2 lg:my-0 lg:text-xl lg:font-semibold transition duration-300">
              About
            </a>
            <a href="#product" className="text-white hover:text-yellow-400 mx-2 lg:mx-6 my-2 lg:my-0 lg:text-xl lg:font-semibold transition duration-300">
              Product
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 mx-2 lg:mx-6 my-2 lg:my-0 lg:text-xl lg:font-semibold transition duration-300">
              Contact Us
            </a>
          </div>
        </div>

        <button
          className="bg-amber-800 border border-white lg:w-28 lg:h-10 w-20 h-8 flex items-center rounded-lg lg:mx-20 lg:ml-0 ml-56 text-white font-medium hover:bg-amber-700 transition duration-300 lg:mt-0"
          onClick={handleGoogleLogin}
        >
          <img src={google} alt="login" className="lg:w-6 lg:ml-3 w-4 ml-1" />
          <span className="ml-2 font-sans text-sm lg:text-md">Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
