import React from "react";

function About() {
  return (
    <main>

      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-gray-400 tracking-widest text-sm">
            ABOUT US
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-5">
            Technology for
            <br />
            Everyday Life.
          </h1>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold">
              Designed for You
            </h2>
          </div>

          <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-5">
            <p>
              Our store focuses on modern consumer technology
              that combines useful features with clean design.
            </p>

            <p>
              From smartwatches to wireless audio products,
              our collection is designed to fit naturally into
              everyday life.
            </p>

            <p>
              This website is a frontend project inspired by
              modern consumer electronics brands.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;