import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <Layout>
      <div className="text-center py-8 bg-gray-50">
        <h1 className="text-3xl font-semibold text-red-800 mb-8">
          Oops! Page Not Found
        </h1>
      </div>

      <main className="mt-8 max-w-3xl mx-auto px-6 text-gray-700 space-y-6">
        <section>
          <p className="text-base leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved.
            Don’t worry, you can always return to safety!
          </p>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <img
              src="/public/rocket-error.png"
              alt="Lost on Poetry Earth"
              className="w-full max-w-md mx-auto mb-8"
            />
            <p className="text-lg text-gray-700 mb-6">
              Maybe try navigating back to familiar ground?
            </p>
            <Link to="/">
              <button className="px-6 py-2 bg-red-700 text-white rounded-lg shadow hover:bg-blue-700">
                Go to Home
              </button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ErrorPage;
