import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const { wishlist } = useShop();

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

      <h1 className="text-4xl font-bold mb-10">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">

          <h2 className="text-2xl font-semibold">
            Your wishlist is empty
          </h2>

          <p className="text-gray-500 mt-3">
            Save products you love here.
          </p>

          <Link
            to="/products"
            className="inline-block mt-7 bg-black text-white px-8 py-4 rounded-full"
          >
            Explore Products
          </Link>

        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </main>
  );
}

export default Wishlist;