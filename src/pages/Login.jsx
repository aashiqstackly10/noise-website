import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login successful!");
    navigate("/");
  };

  return (
    <main className="min-h-[75vh] flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-3">
            Login to your account
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            required
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-4 rounded-xl"
          />

          <input
            required
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-4 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-black dark:text-white underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </main>
  );
}

export default Login;