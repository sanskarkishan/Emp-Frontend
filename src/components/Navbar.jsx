import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
            Employee Database Server 👩‍💻
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-sm md:text-base">
            <a className="hover:text-blue-400" href="/">HOME</a>
            <a className="hover:text-blue-400" href="/">PROFILE</a>
            <a
              className="hover:text-blue-400"
              href="https://github.com/sanskarkishan/Employee-Database-React-SpringBoot-.git"
              target="_blank"
              rel="noreferrer"
            >
              REPO
            </a>
            <a className="hover:text-blue-400" href="/">LOGOUT</a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {/* Hamburger icon */}
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-slate-800">
          <a className="block hover:text-blue-400" href="/">HOME</a>
          <a className="block hover:text-blue-400" href="/">PROFILE</a>
          <a
            className="block hover:text-blue-400"
            href="https://github.com/sanskarkishan/Employee-Database-React-SpringBoot-.git"
            target="_blank"
            rel="noreferrer"
          >
            REPO
          </a>
          <a className="block hover:text-blue-400" href="/">LOGOUT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
