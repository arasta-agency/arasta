import React, { useState } from "react";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();      // stop page reload
    setSubmitted(true);      // show thank you message
    e.target.reset();        // clear input
  };

  return (
    <section className="mt-20 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">

          <h2 className="mb-4 title">Sign up for our Newsletter</h2>
          <p className="mb-10 subdesc">
            Stay up to date with announcements and opportunities.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 p-3 text-sm text-gray-800 bg-white rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
              />

              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-white rounded-xl bg-primary hover:bg-primary-hover transition"
              >
                Subscribe
              </button>

            </div>
          </form>

          {submitted && (
            <p className="mt-4 text-green-600 font-medium">
              Thank you for subscribing!
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

export default Newsletter;