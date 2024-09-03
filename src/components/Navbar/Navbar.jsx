import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from './images.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-300 px-4 py-2 flex items-center justify-between lg:justify-center relative">
      <div className="flex items-center space-x-4 flex-grow">
        <img
          src={image1}
          alt="Parental Control"
          className="h-8 w-8"
        />
        <h5 className="text-black font-serif text-xl ml-4">Game Tracker</h5>
      </div>

      {/* Three-bar Menu Button */}
      <button
        className="text-black font-bold lg:hidden flex-shrink-0"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div className="hidden lg:flex lg:items-center lg:space-x-8 flex-grow justify-end">
        <ul className="lg:flex lg:space-x-4">
          <li>
            <Link
              to="/home"
              className="text-black font-bold px-3 py-2 hover:bg-white hover:text-pink-600 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/game-tracker"
              className="text-black font-bold px-3 py-2 hover:bg-white hover:text-pink-600 rounded-md"
            >
              Game Tracker
            </Link>
          </li>
          <li>
            <Link
              to="/parental-control"
              className="text-black font-bold px-3 py-2 hover:bg-white hover:text-pink-600 rounded-md"
            >
              Parental Control
            </Link>
          </li>
        </ul>
        <div className="lg:ml-8 lg:flex lg:space-x-4">
          <Link
            to="/login"
            className="text-black font-bold px-3 py-2 hover:bg-white hover:text-pink-600 rounded-md"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="text-black font-bold px-3 py-2 hover:bg-white hover:text-pink-600 rounded-md"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-75 flex flex-col items-center justify-center lg:hidden z-50">
          <button
            className="absolute top-4 left-4 text-white text-2xl"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4 py-8">
            <li>
              <Link
                to="/home"
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/game-tracker"
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Game Tracker
              </Link>
            </li>
            <li>
              <Link
                to="/parental-control"
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Parental Control
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
