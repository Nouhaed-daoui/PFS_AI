import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import kachflogo from '../images/Kachf_Logo/2.png';

const HeaderHome = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 bg-lime-50">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-16">
        <Link to="/" className="flex-none w-12">
          <img src={kachflogo} alt="Logo" className="w-full" />
        </Link>

        <div className="flex items-center space-x-6 ml-auto">
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/library" label="Library" />
            <NavLink to="/news" label="News" />
            <NavLink to="/history" label="History" />
            <NavLink to="/contact" label="Contact" />
          </div>

          <button
            className="md:hidden bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center focus:outline-none focus:ring focus:border-blue-300 hover:bg-gray-300 transition duration-300"
            onClick={() => setSearchBoxVisibility(!searchBoxVisibility)}
          >
            <i className="fi fi-rr-search text-xl"></i>
          </button>

          <Link
            className="btn-dark py-2 px-4 bg-green-500 hover:bg-green-600 transition duration-300 text-white rounded-full focus:outline-none focus:ring focus:border-blue-300"
            to="/signin"
          >
            Sign In
          </Link>

          <Link
            className="btn-light py-2 px-4 hidden md:block bg-gray-200 hover:bg-gray-300 transition duration-300 text-gray-700 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>

        {/* Search Box (Mobile) */}
        {searchBoxVisibility && (
          <div className="md:hidden absolute top-full left-0 mt-2.5 bg-white border-b border-gray-300 w-full p-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 p-2 rounded-full placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
  >
    {label}
  </Link>
);

export default HeaderHome;
