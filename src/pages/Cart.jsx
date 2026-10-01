import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShop();

  if (cart.length === 0) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mt-3">
          Add some products to your cart.
        </p>

        <Link
          to="/products"
          className="mt-8 bg-black text-white px-8 py-4 rounded-full"
        >
          Shop Products
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 space-y-5">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-5 p-5 border border-gray-200 dark:border-gray-800 rounded-2xl"
            >

              <div className="w-full sm:w-32 h-32 bg-gray-100 dark:bg-gray-900 rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-3"
                />
              </div>

              <div className="flex-1">

                <h2 className="font-bold text-xl">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  ₹{item.price}
                </p>

                <div className="flex items-center gap-3 mt-5">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-9 h-9 border rounded-full"
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-9 h-9 border rounded-full"
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="flex flex-col justify-between items-end">

                <p className="font-bold">
                  ₹{item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Summary */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-7 h-fit">

          <h2 className="text-2xl font-bold">
            Order Summary
          </h2>

          <div className="flex justify-between mt-8">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>

          <div className="flex justify-between mt-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-6 flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>

          <button className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-full mt-8">
            Checkout
          </button>

        </div>

      </div>

    </main>
  );
}

export default Cart;