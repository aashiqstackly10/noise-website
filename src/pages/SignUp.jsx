import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <main className="min-h-[75vh] flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-md">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold">
            Create Account
          </h1>

          <p className="text-gray-500 mt-3">
            Join our community
          </p>

        </div>

        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-xl mb-5">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            required
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-4 rounded-xl"
          />

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
            minLength="6"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-4 rounded-xl"
          />

          <input
            required
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-4 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline text-black dark:text-white"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}

export default Signup;