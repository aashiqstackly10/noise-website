import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/Products";
import { useShop } from "../context/ShopContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>

        <Link
          to="/products"
          className="mt-6 underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-10 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Details */}
        <div>

          <p className="text-sm text-gray-500 uppercase tracking-widest">
            {product.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {product.name}
          </h1>

          <div className="flex gap-4 items-center mt-5">

            <span className="text-3xl font-bold">
              ₹{product.price}
            </span>

            <span className="line-through text-gray-400">
              ₹{product.oldPrice}
            </span>

          </div>

          <div className="mt-4">
            ⭐ {product.rating} / 5
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-8">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold"
            >
              Add to Cart
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className="border border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full"
            >
              {isInWishlist(product.id)
                ? "♥ Wishlisted"
                : "♡ Add to Wishlist"}
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;