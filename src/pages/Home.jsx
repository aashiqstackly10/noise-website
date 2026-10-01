import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductSlider from "../components/ProductSlider";

function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-black text-white min-h-[80vh] flex items-center">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

          <div className="max-w-3xl">

            <p className="text-sm tracking-[0.4em] text-gray-400 mb-6">
              SMART TECHNOLOGY
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[0.95]">
              Technology
              <br />
              That Moves You
            </h1>

            <p className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed">
              Discover smartwatches, earbuds and accessories
              created for your everyday lifestyle.
            </p>

            <Link
              to="/products"
              className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Shop Now
            </Link>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white dark:bg-black">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 tracking-widest">
              EXPLORE
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <Link
              to="/products?category=Smartwatch"
              className="bg-gray-100 dark:bg-gray-900 p-10 rounded-3xl min-h-[250px] flex items-end hover:scale-[1.02] transition"
            >
              <h3 className="text-3xl font-bold">
                Smartwatches
              </h3>
            </Link>

            <Link
              to="/products?category=Earbuds"
              className="bg-gray-100 dark:bg-gray-900 p-10 rounded-3xl min-h-[250px] flex items-end hover:scale-[1.02] transition"
            >
              <h3 className="text-3xl font-bold">
                Earbuds
              </h3>
            </Link>

            <Link
              to="/products?category=Accessories"
              className="bg-gray-100 dark:bg-gray-900 p-10 rounded-3xl min-h-[250px] flex items-end hover:scale-[1.02] transition"
            >
              <h3 className="text-3xl font-bold">
                Accessories
              </h3>
            </Link>

          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm text-gray-500 tracking-widest">
                FEATURED
              </p>

              <h2 className="text-4xl font-bold mt-2">
                Trending Products
              </h2>
            </div>

            <Link
              to="/products"
              className="hidden sm:block underline"
            >
              View All
            </Link>
          </div>

          <ProductSlider products={products} />

        </div>
      </section>

      {/* Banner */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center">

            <p className="text-gray-400 tracking-widest text-sm">
              LEVEL UP
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-4">
              Make Every Day Smarter.
            </h2>

            <Link
              to="/products"
              className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-full"
            >
              Explore Products
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;