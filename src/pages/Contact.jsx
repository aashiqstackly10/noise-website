import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <div className="text-center mb-12">

        <p className="text-sm text-gray-500 tracking-widest">
          GET IN TOUCH
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Contact Us
        </h1>

      </div>

      <div className="max-w-2xl mx-auto">

        {submitted && (
          <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-6">
            Your message has been submitted successfully.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            required
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-4 rounded-xl outline-none"
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
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-4 rounded-xl outline-none"
          />

          <textarea
            required
            rows="6"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-4 rounded-xl outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}

export default Contact;