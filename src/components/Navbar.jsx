import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useShop } from "../context/ShopContext";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount, wishlist } = useShop();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Noise"
              className="h-28 w-auto object-contain"
            />
          </Link>

          
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
            >
              Products
            </Link>

            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
            >
              Contact
            </Link>

            <Link
              to="/wishlist"
              className="relative text-gray-700 dark:text-gray-200"
            >
              Wishlist

              {wishlist.length > 0 && (
                <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative text-gray-700 dark:text-gray-200"
            >
              Cart

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-4 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
            >
              Login
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-800 dark:text-white"
          >
            ☰
          </button>
        </div>


        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200"
            >
              Products
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200"
            >
              Contact
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200"
            >
              Wishlist ({wishlist.length})
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200"
            >
              Cart ({cartCount})
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200"
            >
              Login
            </Link>

            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;