import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || "All";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Smartwatch",
    "Earbuds",
    "Accessories",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 tracking-widest">
          COLLECTION
        </p>

        <h1 className="text-5xl font-bold mt-3">
          All Products
        </h1>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-full bg-transparent outline-none"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-6 py-3 rounded-full text-sm ${
              category === item
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-100 dark:bg-gray-900"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            No products found
          </h2>

          <p className="text-gray-500 mt-2">
            Try another search.
          </p>
        </div>
      )}

    </main>
  );
}

export default Products;