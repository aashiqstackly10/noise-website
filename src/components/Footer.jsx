import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-extrabold">
              NOISE
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Smart technology designed for modern lifestyles.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Shop
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/products">All Products</Link>
              <Link to="/products?category=Smartwatch">
                Smartwatches
              </Link>
              <Link to="/products?category=Earbuds">
                Earbuds
              </Link>
              <Link to="/products?category=Accessories">
                Accessories
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Create Account</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4 text-gray-400">
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500">
          © 2026 Noise Inspired Store. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;