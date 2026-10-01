import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useShop();

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">

      {/* Image */}
      <div className="relative bg-gray-100 dark:bg-gray-800 aspect-square overflow-hidden">

        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition duration-500"
          />
        </Link>

        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white dark:bg-black flex items-center justify-center text-xl shadow"
        >
          {isInWishlist(product.id) ? "♥" : "♡"}
        </button>
      </div>

      {/* Details */}
      <div className="p-5">

        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-2 font-semibold text-lg hover:underline">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold">
            ₹{product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">

          <span className="text-sm">
            ⭐ {product.rating}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-sm hover:opacity-80 transition"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;